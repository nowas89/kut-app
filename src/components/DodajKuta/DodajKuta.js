import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import compose from "recompose/compose";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import classNames from "classnames";

import TabelaCzynnosci from "../Tabela/TabelaCzynnosci/TabelaCzynnosci";

import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    fontFamily: "Arial"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 170,
    fontFamily: "Arial",
    [theme.breakpoints.down("md")]: {
      width: 120,
      fontSize: 7
    }
  },
  textFieldAr: {
    width: 750,
    [theme.breakpoints.down("md")]: {
      width: 420,
      fontSize: 3
    }
  },
  button: {
    margin: theme.spacing.unit,
    fontFamily: "Arial"
  },
  input: {
    display: "none",
    fontFamily: "Arial"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class DodajKuta extends Component {
  state = {
    ostatniNumer: Number(this.props.ostatniNumer) + 1,
    numerKuta:
      this.props.akronim === "" && this.props.nowyNumerKuta
        ? Number(this.props.ostatniNumer) + 1 + " / " + new Date().getFullYear()
        : null ||
          (this.props.akronim === "" && !this.props.nowyNumerKuta
            ? Number(this.props.karty.length) +
              1 +
              " / " +
              new Date().getFullYear()
            : null) ||
          (this.props.akronim !== "" && this.props.nowyNumerKuta
            ? Number(this.props.ostatniNumer) +
              1 +
              " / " +
              this.props.akronim +
              " / " +
              new Date().getFullYear()
            : null) ||
          (this.props.akronim !== "" && !this.props.nowyNumerKuta
            ? Number(this.props.karty.length) +
              1 +
              " / " +
              this.props.akronim +
              " / " +
              new Date().getFullYear()
            : null),
    defWystawiajacy: this.props.defWystawiajacy,
    defWykonawca: this.props.defWykonawca,
    id: this.props.karty.length + 1,
    dodajCzynnosc: false,
    kartaZdana: false,
    CzCzynnosci: [],
    wykonawca: this.props.defWykonawca,
    marka: "",
    nrRej: "",
    wlasciciel: "",
    terminWykonania:
      new Date().getDate() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getFullYear(),
    zadanie: "",
    wystawiajacy: this.props.defWystawiajacy,
    opis: "",
    dataZdania: "",
    uwagi: "",
    typ: "",
    podstawa: "",
    waznoscKarty:
      new Date().getDate() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getFullYear(),
    pobierajacy: "",

    CzOperacja: "",
    CzRbh: "",
    CzDataWyk:
      new Date().getDate() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getFullYear(),
    CzWykonawca: "",
    CzWyszczegolnienie: "",
    CzOznaczenie: "",
    CzIlosc: "",
    CzAsygnata: "",
    CzUwagi: "",
    CzOperacjaId: 0,

    rodzajRBH: "",
    iloscRBH: "",
    iloscSprzetuRBH: ""
  };
  componentDidMount() {
    this.setState({
      id: this.props.karty.length + 1
    });
    //     this.setState({

    // () =>
    //         if(this.props.akronim === "" && this.props.nowyNumerKuta) {
    //           return  (this.props.ostatniNumer + 1) + " / " +  new Date().getFullYear()
    //         } else if ( this.props.akronim === "" && !this.props.nowyNumerKuta) {
    //           return  (this.props.normalnyNumer + 1) +  " / " +  new Date().getFullYear()
    //         } else if (this.props.akronim !== "" && this.props.nowyNumerKuta) {
    //           return  (this.props.ostatniNumer + 1) +  " / " + this.props.akronim + " / " +  new Date().getFullYear()
    //         }else if (this.props.akronim !== "" && !this.props.nowyNumerKuta) {
    //           return  (this.props.normalnyNumer + 1) +  " / " + this.props.akronim + " / " +  new Date().getFullYear()
    //         }
    //              }
    //     });

    console.log(this.state.numerKuta);
  }

  componentWillUnmount() {
    this.setState({
      numerKuta: "",
      id: this.props.karty.length + 1,
      wykonawca: "",
      marka: "",
      nrRej: "",
      wlasciciel: "",
      terminWykonania:
        new Date().getDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear(),
      zadanie: "",
      wystawiajacy: "",
      opis: "",
      uwagi: "",
      typ: "",
      podstawa: "",
      waznoscKarty: "",
      pobierajacy: "",
      dataZdania: "",

      rodzajRBH: "",
      iloscSprzetuRBH: "",
      iloscRBH: ""
    });
  }

  onClickAction = () => {
    if (!this.state.dodajCzynnosc) {
      this.setState({ dodajCzynnosc: true });
    }
  };

  addNumerKuta = e => {
    this.setState({
      numerKuta: e.target.value
    });
  };

  zmianaSelecta = e => {
    this.setState({
      rodzajRBH: e.target.value
    });
  };
  addIloscSprzetuRBH = e => {
    this.setState({
      iloscSprzetuRBH: e.target.value
    });
  };
  addIloscRBH = e => {
    this.setState({
      iloscRBH: e.target.value
    });
  };

  handleChange = event => {
    this.setState({ kartaZdana: event.target.checked });
  };
  addWykonawca = e => {
    this.setState({
      wykonawca: e.target.value,
      defWykonawca: e.target.value
    });
  };
  addMarka = e => {
    this.setState({
      marka: e.target.value.toUpperCase()
    });
  };
  addNrRej = e => {
    this.setState({
      nrRej: e.target.value.toUpperCase()
    });
  };
  addTerminWYkonania = e => {
    this.setState({
      terminWykonania: e.target.value
    });
  };
  addZadanie = e => {
    this.setState({
      zadanie: e.target.value.toUpperCase()
    });
  };
  addWystawiajacy = e => {
    this.setState({
      wystawiajacy: e.target.value,
      defWystawiajacy: e.target.value
    });
  };
  addOpis = e => {
    this.setState({
      opis: e.target.value
    });
  };
  addUwagi = e => {
    this.setState({
      uwagi: e.target.value
    });
  };
  addWlasciciel = e => {
    this.setState({
      wlasciciel: e.target.value.toUpperCase()
    });
  };
  addTyp = e => {
    this.setState({
      typ: e.target.value
    });
  };
  addPodstawa = e => {
    this.setState({
      podstawa: e.target.value
    });
  };
  addWaznoscKarty = e => {
    this.setState({
      waznoscKarty: e.target.value
    });
  };
  addPobierajacy = e => {
    this.setState({
      pobierajacy: e.target.value
    });
  };
  addDataZdania = e => {
    this.setState({
      dataZdania: e.target.value
    });
  };

  // dodaj czynnosc

  addCzOperacja = e => {
    this.setState({
      CzOperacja: e.target.value.toUpperCase()
    });
  };
  addCzRbh = e => {
    this.setState({
      CzRbh: e.target.value
    });
  };
  addCzDataWyk = e => {
    this.setState({
      CzDataWyk: e.target.value
    });
  };
  addCzWykonawca = e => {
    this.setState({
      CzWykonawca: e.target.value.toUpperCase()
    });
  };
  addCzWyszczegolnienie = e => {
    this.setState({
      CzWyszczegolnienie: e.target.value
    });
  };
  addCzOznaczenie = e => {
    this.setState({
      CzOznaczenie: e.target.value
    });
  };
  addCzIlosc = e => {
    this.setState({
      CzIlosc: e.target.value
    });
  };
  addCzAsygnata = e => {
    this.setState({
      CzAsygnata: e.target.value
    });
  };
  addCzUwagi = e => {
    this.setState({
      CzUwagi: e.target.value
    });
  };
  dispatchAndAndResetCzynnosc = () => {
    let nowyItemCaly = this.state.CzCzynnosci.concat({
      CzOperacja:
        this.state.CzOperacja === "" ? "----------" : this.state.CzOperacja,
      CzRbh: this.state.CzRbh === "" ? "----------" : this.state.CzRbh,
      CzDataWyk:
        this.state.CzDataWyk === "" ? "----------" : this.state.CzDataWyk,
      CzWykonawca:
        this.state.CzWykonawca === "" ? "----------" : this.state.CzWykonawca,
      CzWyszczegolnienie:
        this.state.CzWyszczegolnienie === ""
          ? "----------"
          : this.state.CzWyszczegolnienie,
      CzOznaczenie:
        this.state.CzOznaczenie === "" ? "----------" : this.state.CzOznaczenie,
      CzIlosc: this.state.CzIlosc === "" ? "----------" : this.state.CzIlosc,
      CzAsygnata:
        this.state.CzAsygnata === "" ? "----------" : this.state.CzAsygnata,
      CzUwagi: this.state.CzUwagi === "" ? "----------" : this.state.CzUwagi,
      CzOperacjaId:
        this.state.CzOperacjaId === "" ? "----------" : this.state.CzOperacjaId
    });

    this.setState({
      CzCzynnosci: [...nowyItemCaly]
    });

    //     this.props.onAddNewCzynnosc(
    //     this.state.CzOperacja,
    //     this.state.CzRbh,
    //     this.state.CzDataWyk,
    //     this.state.CzWykonawca,
    //     this.state.CzWyszczegolnienie,
    //     this.state.CzOznaczenie,
    //     this.state.CzIlosc,
    //     this.state.CzAsygnata,
    //     this.state.CzUwagi,
    //     this.state.dodajCzynnosc
    //  )

    setTimeout(() => {
      this.setState({
        CzOperacja: "",
        CzRbh: "",
        CzDataWyk:
          new Date().getDate() +
          "/" +
          (new Date().getMonth() + 1) +
          "/" +
          new Date().getFullYear(),
        CzWykonawca: "",
        CzWyszczegolnienie: "",
        CzOznaczenie: "",
        CzIlosc: "",
        CzAsygnata: "",
        CzUwagi: "",
        CzOperacjaId: this.state.CzCzynnosci.length + 1,
        dodajCzynnosc: false
      });
    }, 100);
  };
  dispatchAndResetNowaKarta = () => {
    this.props.onAddNewKut(this.state);
  };

  render() {
    const { classes } = this.props;
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    today = dd + "/" + mm + "/" + yyyy;

    return (
      <Wrapper>
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "95%",
            paddingTop: "50px",
            paddingBottom: "50px",
            marginTop: "52px"
          }}
        >
          <Form>
            <TextField
              label="Numer KUT"
              defaultValue={this.state.numerKuta}
              className={classes.textField}
              inputProps={{
                style: { textAlign: "center" }
              }}
              margin="normal"
              type="text"
              onChange={e => this.addNumerKuta(e)}
            />
          </Form>
          <Form>
            <TextField
              label="Wykonawca *"
              className={classes.textField}
              margin="normal"
              type="text"
              name="wykonawca"
              defaultValue={this.state.defWykonawca}
              autoComplete="on"
              onChange={e => this.addWykonawca(e)}
            />

            <TextField
              label="Marka i typ sprzętu *"
              className={classes.textField}
              margin="normal"
              type="text"
              name="typ"
              defaultValue={this.state.marka}
              autoComplete="on"
              onChange={e => this.addMarka(e)}
            />

            <TextField
              label="Typ UiSw:"
              className={classes.textField}
              margin="normal"
              type="text"
              name="rodzaj"
              defaultValue={this.state.typ}
              autoComplete="on"
              onChange={e => this.addTyp(e)}
            />
            <TextField
              label="Podstawa wydania"
              className={classes.textField}
              margin="normal"
              type="text"
              name="podstawa"
              defaultValue={this.state.podstawa}
              autoComplete="on"
            />
            <TextField
              label="Nr. rejestracyjny *"
              className={classes.textField}
              margin="normal"
              type="text"
              name="rejestracja"
              defaultValue={this.state.nrRej}
              autoComplete="on"
              onChange={e => this.addNrRej(e)}
            />
          </Form>
          <Form>
            <TextField
              label="  Sprzęt Należy do: *"
              className={classes.textField}
              margin="normal"
              type="text"
              name="wlasciciel"
              defaultValue={this.state.wlasciciel}
              autoComplete="on"
              onChange={e => this.addWlasciciel(e)}
            />

            <TextField
              label=" Termin wykonania"
              className={classes.textField}
              margin="normal"
              type="text"
              name="terminwykonania"
              defaultValue={this.state.terminWykonania}
              autoComplete="on"
              onChange={e => this.addTerminWYkonania(e)}
            />
            <TextField
              label=" Data ważności karty"
              className={classes.textField}
              margin="normal"
              type="text"
              name="karta"
              defaultValue={this.state.waznoscKarty}
              autoComplete="on"
              onChange={e => this.addWaznoscKarty(e)}
            />
            <TextField
              label=" Data zdania karty"
              className={classes.textField}
              margin="normal"
              type="text"
              name="karta"
              defaultValue={this.state.dataZdania}
              autoComplete="on"
              onChange={e => this.addDataZdania(e)}
            />
          </Form>
          <Form>
            <TextField
              label=" Zadanie: *"
              className={classes.textField}
              margin="normal"
              type="text"
              name="zadanie"
              defaultValue={this.state.zadanie}
              autoComplete="on"
              onChange={e => this.addZadanie(e)}
            />

            <TextField
              label="  Kartę wystawił *"
              className={classes.textField}
              margin="normal"
              type="text"
              name="wystawiajacy"
              defaultValue={this.state.defWystawiajacy}
              autoComplete="on"
              onChange={e => this.addWystawiajacy(e)}
            />
          </Form>

          <TextAr>
            <TextField
              className={classes.textFieldAr}
              label=" W czasie defektacji (Badań diagnostycznych) stwierdzono Konieczność
              wykonania następujących prac: "
              type="text"
              name="opis"
              multiline={true}
              defaultValue={this.state.opis}
              autoComplete="on"
              onChange={e => this.addOpis(e)}
            />
          </TextAr>

          <TextAr>
            <TextField
              className={classes.textFieldAr}
              label="  Uwagi przyjmującego"
              type="text"
              margin="normal"
              name="uwagi"
              defaultValue={this.state.uwagi}
              autoComplete="on"
              onChange={e => this.addUwagi(e)}
            />
          </TextAr>

          <TextField
            label=" Karte Pobrał *"
            className={classes.textField}
            margin="normal"
            type="text"
            name="pobierajacy"
            defaultValue={this.state.pobierajacy}
            autoComplete="on"
            onChange={e => this.addPobierajacy(e)}
          />
        </Paper>
        <Typography
          variant="headline"
          gutterBottom
          style={{ marginTop: "52px" }}
        >
          Rozliczenie Wykonania Zadania
        </Typography>
        <Paper
          className={classes.root}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px"
          }}
        >
          <Typography variant="subheading" gutterBottom>
            Rozliczenie Godzin Pracy
          </Typography>
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Rodzaj *</InputLabel>
              <Select
                onChange={this.zmianaSelecta}
                value={this.state.rodzajRBH}
              >
                {this.props.rbhState.length > 0
                  ? this.props.rbhState.map((rodzaj, i) => (
                      <MenuItem key={i} value={rodzaj}>
                        {rodzaj}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </FormControl>
            <TextField
              inputProps={{
                style: { textAlign: "center" }
              }}
              label="Ilość Godzin *"
              className={classes.textField}
              style={{ width: "120px" }}
              margin="normal"
              type="text"
              defaultValue={this.state.iloscRBH}
              onChange={e => this.addIloscRBH(e)}
            />
            <TextField
              inputProps={{
                style: { textAlign: "center" }
              }}
              label="Jednostek Sprzętu *"
              className={classes.textField}
              style={{ width: "160px" }}
              margin="normal"
              type="text"
              onChange={e => this.addIloscSprzetuRBH(e)}
              defaultValue={this.state.iloscSprzetuRBH}
            />
          </div>
        </Paper>

        {this.state.CzCzynnosci.length > 0 ? (
          <TabelaCzynnosci zawartosCzynnosci={this.state.CzCzynnosci} />
        ) : null}
        <Button
          variant="contained"
          className={classes.button}
          style={{ fontSize: "14px" }}
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
                defaultValue={this.state.CzOperacja}
                onChange={e => this.addCzOperacja(e)}
              />

              <TextField
                label=" Zużyto Roboczo Godzin"
                className={classes.textField}
                style={{ width: "200px" }}
                margin="normal"
                type="number"
                name="karta"
                defaultValue={this.state.CzRbh}
                onChange={e => this.addCzRbh(e)}
              />

              <TextField
                label="Data Wykonania"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.state.CzDataWyk}
                onChange={e => this.addCzDataWyk(e)}
              />

              <TextField
                label=" Wykonawca Nazwisko"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.state.CzWykonawca}
                onChange={e => this.addCzWykonawca(e)}
              />
            </Container>
            <Typography
              variant="subheading"
              gutterBottom
              style={{ marginTop: "22px" }}
            >
              Zużycie części i materiałów
            </Typography>

            <Container>
              <TextField
                label="Wyszczególnienie"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.state.CzWyszczegolnienie}
                onChange={e => this.addCzWyszczegolnienie(e)}
              />

              <TextField
                label="    Oznaczenie Katalogowe"
                className={classes.textField}
                style={{ width: "200px" }}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.state.CzOznaczenie}
                onChange={e => this.addCzOznaczenie(e)}
              />

              <TextField
                label="Ilość"
                className={classes.textField}
                margin="normal"
                type="number"
                name="karta"
                defaultValue={this.state.CzIlosc}
                onChange={e => this.addCzIlosc(e)}
              />

              <TextField
                label=" Nr. Asygnaty"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.state.CzAsygnata}
                onChange={e => this.addCzAsygnata(e)}
              />

              <TextField
                label=" Uwagi"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.state.CzUwagi}
                onChange={e => this.addCzUwagi(e)}
              />
            </Container>
            <Button
              variant="fab"
              color="default"
              aria-label="Add"
              className={classes.button}
              style={{ marginTop: "30px", marginBottom: "10px" }}
              onClick={() => this.dispatchAndAndResetCzynnosc()}
            >
              <AddIcon />
            </Button>
          </Czynnosci>
        ) : null}

        <FormControlLabel
          style={{ margin: "0", marginTop: "50px", marginBottom: "20px" }}
          control={
            <Checkbox
              checked={this.state.kartaZdana}
              onChange={e => this.handleChange(e)}
              value="kartaZdana"
              color="primary"
            />
          }
          label={
            this.state.kartaZdana
              ? "karta zostala zdana"
              : "karta nie została zdana"
          }
        />
        {this.state.wykonawca.length < 2 ||
        this.state.marka.length < 2 ||
        this.state.nrRej.length < 2 ||
        this.state.wlasciciel.length < 2 ||
        this.state.zadanie.length < 2 ||
        this.state.wystawiajacy.length < 2 ||
        this.state.rodzajRBH.length < 1 ||
        this.state.iloscRBH.length < 1 ||
        this.state.iloscSprzetuRBH.length < 1 ||
        this.state.zadanie.length < 2 ||
        this.state.pobierajacy.length < 2 ? (
          <Typography
            variant="subheading"
            gutterBottom
            style={{ marginTop: "52px", marginBottom: "52px", color: "red" }}
          >
            Aby dodać kartę uzupełnij wszystkie pola tekstowe oznaczone *
          </Typography>
        ) : (
          <Button
            variant="contained"
            size="medium"
            className={classes.button}
            style={{ margin: "0", marginTop: "50px", marginBottom: "20px" }}
            onClick={() => this.dispatchAndResetNowaKarta()}
          >
            <SaveIcon
              className={classNames(classes.leftIcon, classes.iconSmall)}
              style={{ marginRight: "5px" }}
            />
            Dodaj Kartę
          </Button>
        )}

        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={() =>
            window.confirm("Napewno chcesz anulować dodawanie karty ? ")
              ? this.props.onAnulowanie()
              : null
          }
          className={classes.button}
          style={{
            margin: "0",
            marginTop: "50px",
            marginBottom: "20px"
          }}
        >
          Anuluj Dodawanie Karty
        </Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  width: 95%;
  position: relative;
  overflow: hidden;

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

  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 15px;
  h1 {
    font-family: "Arial";
    font-weight: 400;
  }
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
  padding: 10px 0;
`;

const mapStateToProps = state => {
  return {
    karty: state.karty,
    buttonIsClicked: state.buttonIsClicked,
    buttonDisable: state.buttonDisable,
    akronim: state.akronim,
    rbhState: state.rodzajRBH,
    ostatniNumer: state.ostatniNumer,
    nowyNumerKuta: state.nowyNumerKuta,
    defWystawiajacy: state.defWystawiajacy,
    defWykonawca: state.defWykonawca
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddNewKut: state => dispatch(actions.addNewKut(state)),
    onAnulowanie: () => dispatch(actions.Anulowanie()),
    onAddNewCzynnosc: (
      operacja,
      rbg,
      dataWyk,
      wykonawca,
      wyszczegolnienie,
      oznaczenie,
      asygnata,
      ilosc,
      uwagi,
      CzCzynnosci
    ) =>
      dispatch(
        actions.addNewCzynnosc(
          operacja,
          rbg,
          dataWyk,
          wykonawca,
          wyszczegolnienie,
          oznaczenie,
          asygnata,
          ilosc,
          uwagi,
          CzCzynnosci
        )
      )
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DodajKuta);
