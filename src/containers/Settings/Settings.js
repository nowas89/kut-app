import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import compose from "recompose/compose";
import SaveIcon from "@material-ui/icons/Save";
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
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
    akronim: "",
    rodzajRBH: ""
  };
  addAkronim = e => {
    this.setState({
      akronim: e.target.value
    });
  };
  addTypRBH = e => {
    this.setState({
      rodzajRBH: e.target.value
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props.rbhState);
    return (
      <Wrapper>
        <Typography variant="display1" gutterBottom>
          Wersja programu: {this.props.wersja}
        </Typography>
        <Paper
          className={classes.root}
          style={{ marginTop: "50px", width: "900px" }}
          elevation={1}
        >
          <Typography variant="display1" gutterBottom>
            Ustawienia Programu
          </Typography>
          <Typography variant="subheading" gutterBottom>
            Ustaw Akronim który będzie wyświetlany w numerze Kart np " 12 / WŁ /
            2018" (gdzie WŁ oznacza Warsztat Remontu Sprzętu Łączności i
            Informatyki), <br />w sytuacji gdy akronim nie zostanie podany numer
            karty będzie wyglądał następująco " 12 / 2018"
          </Typography>
          <TextField
            label=" Ustaw Akronim Kart"
            className={classes.textField}
            margin="normal"
            type="text"
            name="karta"
            defaultValue={this.props.akronim}
            onChange={e => this.addAkronim(e)}
          />{" "}
          <span onClick={() => this.props.onSaveAcronim(this.state.akronim)}>
            <SaveIcon style={{ color: "rgba(0, 0 ,0 , 0.3)" }} />
          </span>
        </Paper>

        <Paper
          className={classes.root}
          style={{ marginTop: "50px", width: "900px" }}
          elevation={1}
        >
          <Typography variant="subheading" gutterBottom>
            W tym miejscu skonfigurujesz typ / kategorie lub rodzaj
            Roboczogodzin
          </Typography>
          <TextField
            label="typ, kategoria lub rodzaj "
            className={classes.textField}
            margin="normal"
            type="text"
            onChange={e => this.addTypRBH(e)}
          />{" "}
          <span onClick={() => this.props.onSaveRBH(this.state.rodzajRBH)}>
            <SaveIcon style={{ color: "rgba(0, 0 ,0 , 0.3)" }} />
          </span>
          {this.props.rbhState.length > 0
            ? this.props.rbhState.map((rodzaj, i) => (
                <List key={i}>
                  <ListItem 
          style={{ fontSize: '12px'}}
          >{rodzaj}</ListItem>
                </List>
              ))
            : null}
        </Paper>

        <Typography
          style={{ position: "absolute", bottom: "-30px" }}
          variant="caption"
          gutterBottom
        >
          wszystkie prawa zastrzeżone - Paweł Naworol @ pawel.naworol@icloud.com
        </Typography>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-top: 40px;
  margin-left: 250px;
  min-height: 120%;
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
    akronim: state.akronim,
    rbhState: state.rodzajRBH
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveAcronim: a => dispatch(actions.saveAcronim(a)),
    onSaveRBH: a => dispatch(actions.saveRodzajRBH(a))
  };
};
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Settings);
