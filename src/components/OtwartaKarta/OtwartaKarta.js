import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";

// import * as actions from '../../store/actions'
import styled from "styled-components";

import * as actions from "../../store/actions";

// import { withStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from '@material-ui/icons/Save';
import TabelaCzynnosci from '../Tabela/TabelaCzynnosci/TabelaCzynnosci'


const styles = theme => ({
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
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  button2: {
    margin: theme.spacing.unit,
    width: 160,
    fontSize: 14
  },

  checked: {},
  size: {
    width: 40,
    height: 40
  },
  sizeIcon: {
    fontSize: 20
  }
});

class OtwartaKarta extends Component {
  state = {
    dodajCzynosc: false
  };

  onClickAction = () => {
    if (!this.state.dodajCzynnosc) {
      this.setState({ dodajCzynnosc: true });
    }
  };
  render() {
    const { classes } = this.props;

    return (
      <Wrapper>
        <Form>
          <Typography variant="display1" gutterBottom>
            Edytujesz Kartę Nr. {this.props.numerKuta}
          </Typography>
        </Form>
        <Form>
          <TextField
          
            label="Wykonawca"
            className={classes.textField}
            margin="normal"
            type="text"
            name="wykonawca"
            defaultValue={this.props.wykonawca}
            autoComplete="on"
            onChange={e => this.addWykonawca(e)}
          />

          <TextField
            label="Marka i typ sprzętu"
            className={classes.textField}
            margin="normal"
            type="text"
            name="typ"
            defaultValue={this.props.marka}
            autoComplete="on"
            onChange={e => this.addMarka(e)}
          />

          <TextField
            label="Typ UiSw:"
            className={classes.textField}
            margin="normal"
            type="text"
            name="rodzaj"
            defaultValue={this.props.typ}
            autoComplete="on"
            onChange={e => this.addTyp(e)}
          />
          <TextField
            label="Podstawa wydania"
            className={classes.textField}
            margin="normal"
            type="text"
            name="podstawa"
            defaultValue={this.props.podstawa}
            autoComplete="on"
            onChange={e => this.addPodstawa(e)}
          />
        </Form>
        <Form>
          <TextField
            label="Nr. rejestracyjny"
            className={classes.textField}
            margin="normal"
            type="text"
            name="rejestracja"
            defaultValue={this.props.nrRej}
            autoComplete="on"
            onChange={e => this.addNrRej(e)}
          />

          <TextField
            label="  Sprzęt Należy do:"
            className={classes.textField}
            margin="normal"
            type="text"
            name="wlasciciel"
            defaultValue={this.props.wlasciciel}
            autoComplete="on"
            onChange={e => this.addWlasciciel(e)}
          />

          <TextField
            label=" Termin wykonania"
            className={classes.textField}
            margin="normal"
            type="text"
            name="terminwykonania"
            defaultValue={this.props.terminWykonania}
            autoComplete="on"
            onChange={e => this.addTerminWYkonania(e)}
          />
          <TextField
            label=" Data ważności karty"
            className={classes.textField}
            margin="normal"
            type="text"
            name="karta"
            defaultValue={this.props.waznoscKarty}
            autoComplete="on"
            onChange={e => this.addWaznoscKarty(e)}
          />
        </Form>
        <Form>
          <TextField
            label=" Zadanie:"
            className={classes.textField}
            margin="normal"
            type="text"
            name="zadanie"
            defaultValue={this.props.zadanie}
            autoComplete="on"
            onChange={e => this.addZadanie(e)}
          />

          <TextField
            label="  Kartę wystawił"
            className={classes.textField}
            margin="normal"
            type="text"
            name="wystawiajacy"
            defaultValue={this.props.wystawiajacy}
            autoComplete="on"
            onChange={e => this.addWystawiajacy(e)}
          />
        </Form>

        <TextAr>
          <TextField
            style={{ width: 750 }}
            label=" W czasie defektacji (Badań diagnostycznych) stwierdzono Konieczność
             wykonania następujących prac:"
            type="text"
            name="opis"
            multiline={true}
            defaultValue={this.props.opis}
            autoComplete="on"
            onChange={e => this.addOpis(e)}
          />
        </TextAr>

        <TextAr>
          <TextField
            style={{ width: 750 }}
            label="  Uwagi przyjmującego"
            type="text"
            margin="normal"
            name="uwagi"
            defaultValue={this.props.uwagi}
            autoComplete="on"
            onChange={e => this.addUwagi(e)}
          />
        </TextAr>

        <TextField
          label=" Karte Pobrał"
          
          className={classes.textField}
          margin="normal"
          type="text"
          name="pobierajacy"
          defaultValue={this.props.pobierajacy}
          autoComplete="on"
          onChange={e => this.addPobierajacy(e)}
        />

        <br />
        <br />
        <br />

        <Typography variant="display1" gutterBottom>
          Rozliczenie wykonania zadania
        </Typography>
{this.props.CzCzynnosci.length > 0 ? (
    <TabelaCzynnosci zawartosCzynnosci={this.props.CzCzynnosci} />
  ) : null}
        <Button
          variant="contained"
          className={classes.button2}
          onClick={this.onClickAction}
        >
          Dodaj Czynność
        </Button>
        {this.state.dodajCzynnosc ? (
          <Czynnosci>
            <Container>
              <TextField
                label=" Operacja, czynność"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.CzOperacja}
                onChange={e => this.addCzOperacja(e)}
              />

              <TextField
                label=" Zużyto Roboczo Godzin"
                className={classes.textField}
                margin="normal"
                type="number"
                name="karta"
                defaultValue={this.props.CzRbh}
                onChange={e => this.addCzRbh(e)}
              />

              <TextField
                label="Data Wykonania"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.CzDataWyk}
                onChange={e => this.addCzDataWyk(e)}
              />

              <TextField
                label=" Wykonawca Nazwisko"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.CzWykonawca}
                onChange={e => this.addCzWykonawca(e)}
              />
            </Container>
            <h5>Zużycie części i materiałów</h5>
            <Container>
              <TextField
                label="Wyszczególnienie"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.CzWyszczegolnienie}
                onChange={e => this.addCzWyszczegolnienie(e)}
              />

              <TextField
                label="    Oznaczenie Katalogowe"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.CzOznaczenie}
                onChange={e => this.addCzOznaczenie(e)}
              />

              <TextField
                label="Ilość"
                className={classes.textField}
                margin="normal"
                type="number"
                name="karta"
                defaultValue={this.props.CzIlosc}
                onChange={e => this.addCzIlosc(e)}
              />

              <TextField
                label=" Nr. Asygnaty"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.CzAsygnata}
                onChange={e => this.addCzAsygnata(e)}
              />

              <TextField
                label=" Uwagi"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.CzUwagi}
                onChange={e => this.addCzUwagi(e)}
              />
            </Container>

            <Button
              variant="fab"
              color="primary"
              aria-label="Add"
              className={classes.button}
            style={{marginTop: '30px'}}
              
              onClick={console.log("dodaj czynnosc")}
            >
              <AddIcon />
            </Button>
          </Czynnosci>
        ) : null}
        <FormControlLabel
          style={{ margin: "0", marginTop: '50px', marginBottom: '20px' }}
          control={
            <Checkbox
              //   checked={this.state.checkedB}
              //   onChange={this.handleChange('checkedB')}
              //   value="checkedB"
              color="primary"
            />
          }
          label="Karta Została Zdana"
        />

     

 <Button variant="contained" size="medium" className={classes.button} 
     style={{ margin: "0", marginTop: '50px', marginBottom: '20px' }}
 onClick={() =>
            this.props.onZamykanieKarty(this.props.kartaJestOtwarta)
      

            
          }>
        <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
        Zapisz Kartę
      </Button>

      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  padding-top: 20px;
  top: 0;
  background: white;
  margin-left: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: calc(100% - 250px);
  label {
    padding: 5px;
    display: flex;
    flex-direction: column;
  }
  input {
    width: 200px;
  }
`;

const Czynnosci = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2 5);
`;

const Form = styled.form`
  margin-bottom: 50px;
`;
const TextAr = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  justify-center: center;
  padding: 10px 0;
`;

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onZamykanieKarty: a => dispatch(actions.zamykanieKarty(a))
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(OtwartaKarta);
