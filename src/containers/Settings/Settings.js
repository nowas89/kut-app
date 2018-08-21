import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import compose from "recompose/compose";
import SaveIcon from "@material-ui/icons/Save";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Settings extends Component {
  state = {
 akronim: ""
  };
  addAkronim = e => {
    this.setState({
    akronim: e.target.value
      }
        )
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.akronim)
    return (
      <Wrapper>
 <Typography variant="display1" gutterBottom>
            Wersja programu: {this.props.wersja}
          </Typography>
        <Paper style={{marginTop: '50px'}}className={classes.root} elevation={1}>
 <Typography variant="display1" gutterBottom>
            Ustawienia Programu
          </Typography>
 <Typography variant="subheading" gutterBottom>
            Ustaw Akronim który będzie wyświetlany w numerze Kart np 
            " 12 / WŁ / 2018" (gdzie WŁ oznacza Warsztat Remontu Sprzętu Łączności i Informatyki),
            w sytuacji gdy akronim nie zostanie podany numer karty będzie wyglądał następująco
            " 12 / 2018"
          </Typography>
            <TextField
                label=" Ustaw Akronim Kart"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
              
                defaultValue={this.props.akronim}
                onChange={e => this.addAkronim(e)}
              /> <span onClick={() => this.props.onSaveAcronim(this.state.akronim)}>
                <SaveIcon style={{color: 'rgba(0, 0 ,0 , 0.3)'}}/>
              </span>
              </Paper>
              <Typography 
              style={{position: 'absolute',bottom: '10px'}}
              variant="caption" gutterBottom>
          wszystkie prawa zastrzeżone - Paweł Naworol @ pawel.naworol@icloud.com
          </Typography>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
margin-top: 100px;
  margin-left: 250px;
  min-height: calc(100vh - 100px);
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Helvetica";
  font-weight: 400;

`;

const mapStateToProps = state => {
  return {
    wersja: state.wersja,
    akronim: state.akronim
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveAcronim: a=> dispatch(actions.saveAcronim(a))
  };
};
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Settings);
