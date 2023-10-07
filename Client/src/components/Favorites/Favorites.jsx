import { Component } from 'react';
import { connect } from 'react-redux';
import style from '../Cards/Cards.module.css'
import style1 from './favorites.module.css'
import Card from '../Card/Card';
import { removeFav } from '../../redux/actions';
import { order, filter } from '../../redux/actions';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aux: false,
        }
    }
    
//! observacion, dentro de las Class Component, las funciones son METODOS y no funciones regulares
    handleCloseFav(id) {
        this.props.removeFav(id)
    }
    handleFilter(event){
        this.props.filter(event.target.value) 
    }
    handleOrder(event){
        this.props.order(event.target.value)
        if (this.state.aux === false) {
            this.setState({aux: true})
        } else { 
            this.setState({aux: false})
        }
        console.log(this.state.aux)
    }

    //! mi error era que estaba haciendo el map del objeto State (this.props.map) y lo correcto es
    //! hacer el map del array dentro del elemento myFavorites (this.props.myFavorites)
    render() {
        return (
            <div>
            <div className={style1.container}>
                <select className={style1.select} onChange={(event)=>{this.handleOrder(event)}}>
                    <option value="A">Ascendiente</option>
                    <option value="B">Descendente</option>
                </select>
                <select className={style1.select} onChange={(event)=>this.handleFilter(event)}>
                    <option value='All'>All</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>unknown</option>
                </select>
            </div>
            <div className={style.container}>
            {this.props.myFavorites.map((character) => 
               <Card
               id={character.id}
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin}
               image={character.image}
    //! Observacion, en class component se pasa la referencia de una funcion y no la ejecucion o resultado de tal.
            //    onClose={()=>this.handleCloseFav(character.id)}
               />
            )}               
         </div>
         </div>
        );
    }
}

function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites,
    }
}
//! observacion, no estaba pasando los parametros "id"
function mapDispatchToProps(dispatch){
    return {
    removeFav: (id)=> {
        dispatch(removeFav(id))
        },
    filter: (event) => {
        
        dispatch(filter(event))
        },
    order: (event) => {
        dispatch(order(event))
    }
}}
    
//* mapStateToProps y mapDispatchToProps se declaran cuando usa Class Components
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
