import React from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFav: false };
      
 
  }
  render() {
    return (
      <div className={style.box} key={this.props.id}>
        {this.state.isFav ? (
          <button onClick={() => {this.props.removeFav(this.props.id); this.setState({isFav: false})}} >❤️</button>
        ) : (
          <button onClick={() => {this.props.addFav(this.props); this.setState({isFav: true})}}>🤍</button>
        )}
        <button onClick={() => this.props.onClose(this.props.id)}>X</button>

        <div className={style.info}>
          <img
            className={style.img}
            src={this.props.image}
            alt={this.props.name}
          />
          <Link to={`/detail/${this.props.id}`}>
            <h3>{this.props.name}</h3>
          </Link>
          <h4>{this.props.species}</h4>
          <h4>{this.props.gender}</h4>
          <h4>{this.props.status}</h4>
          <h4>{this.props.origin}</h4>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (chart) => {
      dispatch(addFav(chart));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Card);
