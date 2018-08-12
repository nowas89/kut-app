import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";

// import * as actions from '../../store/actions'
import styled from "styled-components";

import * as actions from "../../store/actions";

// import { withStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import TabelaCzynnosci from "../Tabela/TabelaCzynnosci/TabelaCzynnosci";

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
    dodajCzynosc: false,

    karta: {
      kartaZdana: null,
      numerKuta: "",
      id: "",
      dodajCzynnosc: "",
      CzCzynnosci: [],
      wykonawca: "",
      marka: "",
      nrRej: "",
      wlasciciel: "",
      terminWykonania: "",
      zadanie: "",
      wystawiajacy: "",
      opis: "",
      uwagi: "",
      typ: "",
      podstawa: "",
      waznoscKarty: "",
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
      CzOperacjaId: 0
    }
  };

  componentWillMount() {
    this.setState({
      dodajCzynnosc: this.props.dodajCzynnosc,
      karta: {
        numerKuta: this.props.numerKuta,
        id: this.props.id,
        kartaZdana: this.props.kartaZdana,
        CzCzynnosci: this.props.CzCzynnosci,
        wykonawca: this.props.wykonawca,
        marka: this.props.marka,
        nrRej: this.props.nrRej,
        wlasciciel: this.props.wlasciciel,
        terminWykonania: this.props.terminWykonania,
        zadanie: this.props.zadanie,
        wystawiajacy: this.props.wystawiajacy,
        opis: this.props.opis,
        uwagi: this.props.uwagi,
        typ: this.props.typ,
        podstawa: this.props.podstawa,
        waznoscKarty: this.props.waznoscKarty,
        pobierajacy: this.props.pobierajacy,
        CzOperacjaId: this.state.karta.CzCzynnosci.length + 1
      }
    });
  }

  addNewCzynnoscAndReset = () => {
    let nowyItemCaly = this.state.karta.CzCzynnosci.concat({
      CzOperacja:
        this.state.karta.CzOperacja === ""
          ? "----------"
          : this.state.karta.CzOperacja,
      CzRbh:
        this.state.karta.CzRbh === "" ? 
        "----------"
         : this.state.karta.CzRbh,
      CzDataWyk:
        this.state.karta.CzDataWyk === ""
          ? "----------"
          : this.state.karta.CzDataWyk,
      CzWykonawca:
        this.state.karta.CzWykonawca === ""
          ? "----------"
          : this.state.karta.CzWykonawca,
      CzWyszczegolnienie:
        this.state.karta.CzWyszczegolnienie === ""
          ? "----------"
          : this.state.karta.CzWyszczegolnienie,
      CzOznaczenie:
        this.state.karta.CzOznaczenie === ""
          ? "----------"
          : this.state.karta.CzOznaczenie,
      CzIlosc:
        this.state.karta.CzIlosc === ""
          ? "----------"
          : this.state.karta.CzIlosc,
      CzAsygnata:
        this.state.karta.CzAsygnata === ""
          ? "----------"
          : this.state.karta.CzAsygnata,
      CzUwagi:
        this.state.karta.CzUwagi === ""
          ? "----------"
          : this.state.karta.CzUwagi,
      CzOperacjaId:
        this.state.karta.CzOperacjaId === ""
          ? "----------"
          : this.state.karta.CzOperacjaId
    });

    this.setState({
      karta: {
        ...this.state.karta,
        CzCzynnosci: [...nowyItemCaly]
      },
      dodajCzynnosc: false
    });

    setTimeout(() => {
      this.setState({
        karta: {
          ...this.state.karta,
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
          CzOperacjaId: this.state.karta.CzCzynnosci.length + 1
        },

        dodajCzynnosc: false
      });
    }, 100);
  };

  onClickAction = () => {
    if (!this.state.dodajCzynnosc) {
      this.setState({ dodajCzynnosc: true });
    }
  };

  handleChange = event => {
    this.setState({
      karta: {
        ...this.state.karta,
        kartaZdana: event.target.checked
      }
    });
  };

  addWykonawca = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        wykonawca: e.target.value
      }
    });
  };
  addMarka = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        marka: e.target.value
      }
    });
  };
  addNrRej = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        nrRej: e.target.value
      }
    });
  };
  addTerminWYkonania = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        terminWykonania: e.target.value
      }
    });
  };
  addZadanie = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        zadanie: e.target.value
      }
    });
  };
  addWystawiajacy = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        wystawiajacy: e.target.value
      }
    });
  };
  addOpis = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        opis: e.target.value
      }
    });
  };
  addUwagi = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        uwagi: e.target.value
      }
    });
  };
  addWlasciciel = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        wlasciciel: e.target.value
      }
    });
  };
  addTyp = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        typ: e.target.value
      }
    });
  };
  addPodstawa = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        podstawa: e.target.value
      }
    });
  };
  addWaznoscKarty = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        waznoscKarty: e.target.value
      }
    });
  };
  addPobierajacy = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        pobierajacy: e.target.value
      }
    });
  };

  // dodaj czynnosc

  addCzOperacja = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        CzOperacja: e.target.value
      }
    });
  };
  addCzRbh = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        CzRbh: e.target.value
      }
    });
  };
  addCzDataWyk = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        CzDataWyk: e.target.value
      }
    });
  };
  addCzWykonawca = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        CzWykonawca: e.target.value
      }
    });
  };
  addCzWyszczegolnienie = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        CzWyszczegolnienie: e.target.value
      }
    });
  };
  addCzOznaczenie = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        CzOznaczenie: e.target.value
      }
    });
  };
  addCzIlosc = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        CzIlosc: e.target.value
      }
    });
  };
  addCzAsygnata = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        CzAsygnata: e.target.value
      }
    });
  };
  addCzUwagi = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        CzUwagi: e.target.value
      }
    });
  };
  render() {
    const { classes } = this.props;
    console.log(this.state.karta.CzCzynnosci.length);
    return (
      <Wrapper>
        <Form>
          <Typography variant="display1" gutterBottom>
            Edytujesz Kartę Nr. {this.state.karta.numerKuta}
          </Typography>
        </Form>
        <Form>
          <TextField
            label="Wykonawca"
            className={classes.textField}
            margin="normal"
            type="text"
            name="wykonawca"
            defaultValue={this.state.karta.wykonawca}
            autoComplete="on"
            onChange={e => this.addWykonawca(e)}
          />

          <TextField
            label="Marka i typ sprzętu"
            className={classes.textField}
            margin="normal"
            type="text"
            name="typ"
            defaultValue={this.state.karta.marka}
            autoComplete="on"
            onChange={e => this.addMarka(e)}
          />

          <TextField
            label="Typ UiSw:"
            className={classes.textField}
            margin="normal"
            type="text"
            name="rodzaj"
            defaultValue={this.state.karta.typ}
            autoComplete="on"
            onChange={e => this.addTyp(e)}
          />
          <TextField
            label="Podstawa wydania"
            className={classes.textField}
            margin="normal"
            type="text"
            name="podstawa"
            defaultValue={this.state.karta.podstawa}
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
            defaultValue={this.state.karta.nrRej}
            autoComplete="on"
            onChange={e => this.addNrRej(e)}
          />

          <TextField
            label="  Sprzęt Należy do:"
            className={classes.textField}
            margin="normal"
            type="text"
            name="wlasciciel"
            defaultValue={this.state.karta.wlasciciel}
            autoComplete="on"
            onChange={e => this.addWlasciciel(e)}
          />

          <TextField
            label=" Termin wykonania"
            className={classes.textField}
            margin="normal"
            type="text"
            name="terminwykonania"
            defaultValue={this.state.karta.terminWykonania}
            autoComplete="on"
            onChange={e => this.addTerminWYkonania(e)}
          />
          <TextField
            label=" Data ważności karty"
            className={classes.textField}
            margin="normal"
            type="text"
            name="karta"
            defaultValue={this.state.karta.waznoscKarty}
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
            defaultValue={this.state.karta.zadanie}
            autoComplete="on"
            onChange={e => this.addZadanie(e)}
          />

          <TextField
            label="  Kartę wystawił"
            className={classes.textField}
            margin="normal"
            type="text"
            name="wystawiajacy"
            defaultValue={this.state.karta.wystawiajacy}
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
            defaultValue={this.state.karta.opis}
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
            defaultValue={this.state.karta.uwagi}
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
          defaultValue={this.state.karta.pobierajacy}
          autoComplete="on"
          onChange={e => this.addPobierajacy(e)}
        />

        <br />
        <br />
        <br />

        <Typography variant="display1" gutterBottom>
          Rozliczenie wykonania zadania
        </Typography>
        {this.state.karta.CzCzynnosci.length > 0 ? (
          <TabelaCzynnosci zawartosCzynnosci={this.state.karta.CzCzynnosci} />
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
                defaultValue={this.state.karta.CzOperacja}
                onChange={e => this.addCzOperacja(e)}
              />

              <TextField
                label=" Zużyto Roboczo Godzin"
                className={classes.textField}
                margin="normal"
                type="number"
                name="karta"
                defaultValue={this.state.karta.CzRbh}
                onChange={e => this.addCzRbh(e)}
              />

              <TextField
                label="Data Wykonania"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.state.karta.CzDataWyk}
                onChange={e => this.addCzDataWyk(e)}
              />

              <TextField
                label=" Wykonawca Nazwisko"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.state.karta.CzWykonawca}
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
                defaultValue={this.state.karta.CzWyszczegolnienie}
                onChange={e => this.addCzWyszczegolnienie(e)}
              />

              <TextField
                label="    Oznaczenie Katalogowe"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.state.karta.CzOznaczenie}
                onChange={e => this.addCzOznaczenie(e)}
              />

              <TextField
                label="Ilość"
                className={classes.textField}
                margin="normal"
                type="number"
                name="karta"
                defaultValue={this.state.karta.CzIlosc}
                onChange={e => this.addCzIlosc(e)}
              />

              <TextField
                label=" Nr. Asygnaty"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.state.karta.CzAsygnata}
                onChange={e => this.addCzAsygnata(e)}
              />

              <TextField
                label=" Uwagi"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.state.karta.CzUwagi}
                onChange={e => this.addCzUwagi(e)}
              />
            </Container>

            <Button
              variant="fab"
              color="primary"
              aria-label="Add"
              className={classes.button}
              style={{ marginTop: "30px" }}
              onClick={() => this.addNewCzynnoscAndReset()}
            >
              <AddIcon />
            </Button>
          </Czynnosci>
        ) : null}
        <FormControlLabel
          style={{ margin: "0", marginTop: "50px", marginBottom: "20px" }}
          control={
            <Checkbox
              checked={this.state.karta.kartaZdana}
              onChange={e => this.handleChange(e)}
              value="kartaZdana"
              color="primary"
            />
          }
          label="Karta Została Zdana"
        />

        <Button
          variant="contained"
          size="medium"
          className={classes.button}
          style={{ margin: "0", marginTop: "50px", marginBottom: "20px" }}
          onClick={() =>
            this.props.onZamykanieKarty(
              this.props.kartaJestOtwarta,
              this.state.karta
            )
          }
        >
          <SaveIcon
            className={classNames(classes.leftIcon, classes.iconSmall)}
          />
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
    onZamykanieKarty: (a, b) => dispatch(actions.zamykanieKarty(a, b))
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(OtwartaKarta);
