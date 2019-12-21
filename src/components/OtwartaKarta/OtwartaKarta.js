import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";

// import * as actions from '../../store/actions'
import styled from "styled-components";

import * as actions from "../../store/actions";
import WygenerowanyKut from "../WygenerowanyKut/WygenerowanyKut";
import TabelaCzynnosci from "../Tabela/TabelaCzynnosci/TabelaCzynnosci";

import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

import WygenerowanyKut2 from "../WygenerowanyKut/WygenerowanyKut2";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 180,
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
    marginRight: 5,
    fontSize: 20
  },
  icon: {
    marginRight: 5,
    fontSize: 24
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class OtwartaKarta extends Component {
  state = {
    dodajCzynosc: false,
    drukowanie: false,
    karta: {
      numer: "",
      kartaZdana: null,
      numerKuta: "",
      id: "",
      dodajCzynnosc: "",
      CzCzynnosci: [],
      wykonawca: "",
      marka: "",
      nrRej: "",
      wlasciciel: "",
      dataZdania: "",
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
        "." +
        (new Date().getMonth() + 1) +
        "." +
        new Date().getFullYear(),
      CzWykonawca: "",
      CzWyszczegolnienie: "",
      CzOznaczenie: "",
      CzIlosc: "",
      CzAsygnata: "",
      CzUwagi: "",
      CzOperacjaId: 0,
      rodzajRBH: "",
      iloscSprzetuRBH: "",
      iloscRBH: "",
      edytowaneCz: {
        editCzOperacjaId: '',
        editCzOperacja: "",
        editCzRbh: "",
        editCzDataWyk: "",
        editCzWykonawca: "",
        editCzWyszczegolnienie: "",
        editCzOznaczenie: "",
        editCzIlosc: "",
        editCzAsygnata: "",
        editCzUwagi: ""
      }, 
      editOperacji: this.props.editOperacji
    }
  };

  componentWillMount() {
    this.setState({
      dodajCzynnosc: this.props.taKartaJestOtwarta.dodajCzynnosc,
      karta: {
        numerKuta: this.props.taKartaJestOtwarta.numerKuta,
        numer: this.props.taKartaJestOtwarta.numer,
        id: this.props.taKartaJestOtwarta.id,
        kartaZdana: this.props.taKartaJestOtwarta.kartaZdana,
        CzCzynnosci: this.props.taKartaJestOtwarta.CzCzynnosci,
        wykonawca: this.props.taKartaJestOtwarta.wykonawca,
        marka: this.props.taKartaJestOtwarta.marka,
        nrRej: this.props.taKartaJestOtwarta.nrRej,
        wlasciciel: this.props.taKartaJestOtwarta.wlasciciel,
        terminWykonania: this.props.taKartaJestOtwarta.terminWykonania,
        zadanie: this.props.taKartaJestOtwarta.zadanie,
        wystawiajacy: this.props.taKartaJestOtwarta.wystawiajacy,
        opis: this.props.taKartaJestOtwarta.opis,
        uwagi: this.props.taKartaJestOtwarta.uwagi,
        typ: this.props.taKartaJestOtwarta.typ,
        podstawa: this.props.taKartaJestOtwarta.podstawa,
        waznoscKarty: this.props.taKartaJestOtwarta.waznoscKarty,
        pobierajacy: this.props.taKartaJestOtwarta.pobierajacy,
        CzOperacjaId: this.state.karta.CzCzynnosci.length + 1,
        dataZdania: this.props.taKartaJestOtwarta.dataZdania,
        rodzajRBH: this.props.taKartaJestOtwarta.rodzajRBH,
        iloscSprzetuRBH: this.props.taKartaJestOtwarta.iloscSprzetuRBH,
        iloscRBH: this.props.taKartaJestOtwarta.iloscRBH,
        CzDataWyk:
          new Date().getDate() +
          "." +
          (new Date().getMonth() + 1) +
          "." +
          new Date().getFullYear(),
        CzOperacja: "",
        CzRbh: "",
        CzWykonawca: "",
        CzWyszczegolnienie: "",
        CzOznaczenie: "",
        CzIlosc: "",
        CzAsygnata: "",
        CzUwagi: "",
        edytowaneCz: {
          editCzOperacjaId: this.props.edytowanaCz.CzOperacjaId,
          editCzOperacja: this.props.edytowanaCz.CzOperacja,
          editCzRbh: this.props.edytowanaCz.CzRbh,
          editCzDataWyk: this.props.edytowanaCz.CzDataWyk,
          editCzWykonawca: this.props.edytowanaCz.CzWykonawca,
          editCzWyszczegolnienie: this.props.edytowanaCz.CzWyszczegolnienie,
          editCzOznaczenie: this.props.edytowanaCz.CzOznaczenie,
          editCzIlosc: this.props.edytowanaCz.CzIlosc,
          editCzAsygnata: this.props.edytowanaCz.CzAsygnata,
          editCzUwagi: this.props.edytowanaCz.CzUwagi
        }
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
        this.state.karta.CzRbh === "" ? "----------" : this.state.karta.CzRbh,
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
      CzOperacjaId: this.state.karta.CzCzynnosci.length + 1
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

  drukuj = e => {
    this.setState({
      drukowanie: !e.target.value
    });
  };

  zmianaSelecta = e => {
    this.setState({
      karta: {
        ...this.state.karta,

        rodzajRBH: e.target.value
      }
    });
  };
  addIloscSprzetuRBH = e => {
    this.setState({
      karta: {
        ...this.state.karta,

        iloscSprzetuRBH: e.target.value
      }
    });
  };
  addIloscRBH = e => {
    this.setState({
      karta: {
        ...this.state.karta,

        iloscRBH: e.target.value
      }
    });
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
        marka: e.target.value.toUpperCase()
      }
    });
  };
  addNrRej = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        nrRej: e.target.value.toUpperCase()
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
        zadanie: e.target.value.toUpperCase()
      }
    });
  };
  addWystawiajacy = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        wystawiajacy: e.target.value.toUpperCase()
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
        wlasciciel: e.target.value.toUpperCase()
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
        CzOperacja: e.target.value.toUpperCase()
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
        CzWykonawca: e.target.value.toUpperCase()
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
  addDataZdania = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        dataZdania: e.target.value
      }
    });
  };
  // edycja czynnosci

  editCzOperacja = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        edytowaneCz: {  ...this.state.karta.edytowaneCz, editCzOperacja: e.target.value.toUpperCase() }
      }
    });
  };
  editCzRbh = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        edytowaneCz: {...this.state.karta.edytowaneCz,  editCzRbh: e.target.value }
      }
    });
  };
  editCzDataWyk = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        edytowaneCz: { ...this.state.karta.edytowaneCz, editCzDataWyk: e.target.value }
      }
    });
  };
  editCzWykonawca = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        edytowaneCz: {...this.state.karta.edytowaneCz,  editCzWykonawca: e.target.value.toUpperCase() }
      }
    });
  };
  editCzWyszczegolnienie = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        edytowaneCz: {...this.state.karta.edytowaneCz,  editCzWyszczegolnienie: e.target.value }
      }
    });
  };
  editCzOznaczenie = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        edytowaneCz: {...this.state.karta.edytowaneCz,  editCzOznaczenie: e.target.value }
      }
    });
  };
  editCzIlosc = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        edytowaneCz: { ...this.state.karta.edytowaneCz, editCzIlosc: e.target.value }
      }
    });
  };
  editCzAsygnata = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        edytowaneCz: { ...this.state.karta.edytowaneCz, editCzAsygnata: e.target.value }
      }
    });
  };
  editCzUwagi = e => {
    this.setState({
      karta: {
        ...this.state.karta,
        edytowaneCz: { ...this.state.karta.edytowaneCz, editCzUwagi: e.target.value }
      }
    });
  };

  editCzynnosci = czynnosci => {
let sprawdzanaCz= this.props.edytowanaCz
let edytowanaCzynnosc = this.state.karta.edytowaneCz;
let nowaListaCz = this.state.karta.CzCzynnosci.map(czynnosc => {
            if (
              czynnosc.CzOperacjaId === sprawdzanaCz.CzOperacjaId
            ) {
              return {
                CzDataWyk:edytowanaCzynnosc.editCzDataWyk,
                CzOperacja: edytowanaCzynnosc.editCzOperacja,
                CzRbh: edytowanaCzynnosc.editCzRbh,
                CzWykonawca: edytowanaCzynnosc.editCzWykonawca,
                CzWyszczegolnienie:edytowanaCzynnosc.editCzWyszczegolnienie,
                CzOznaczenie: edytowanaCzynnosc.editCzOznaczenie,
                CzIlosc:edytowanaCzynnosc.editCzIlosc,
                CzAsygnata: edytowanaCzynnosc.editCzAsygnata,
                CzUwagi: edytowanaCzynnosc.editCzUwagi,
                CzOperacjaId: edytowanaCzynnosc.editCzOperacjaId
              };
            } else {
              return czynnosc;
            }

          })
          this.setState({
            karta: {
              ...this.state.karta,
              CzCzynnosci: nowaListaCz
            },
            
          });
         
let asd = () => this.props.editCzynnosci(this.state.editOperacji)
asd()
          console.log(nowaListaCz)
  }



  deleteCzCzynnosc = () => {

    let arrayAfterDelete = this.state.karta.CzCzynnosci.filter(
      item => item.CzOperacjaId !== this.props.edytowanaCz.CzOperacjaId
    );
    this.setState({
      karta: {
        ...this.state.karta,
        CzCzynnosci: arrayAfterDelete
      },
      
    });
    console.log(arrayAfterDelete)
    let asd = () => this.props.editCzynnosci(this.state.editOperacji)
    asd()

  }
  render() {
    const { classes } = this.props;
console.log(this.state.karta.numer)
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
            <Typography
              variant="display1"
              gutterBottom
              style={{ fontFamily: "Arial" }}
            >
              Edytujesz Kartę Nr. {this.state.karta.numerKuta}
            </Typography>
          </Form>
          <Form>
            <TextField
              label="Wykonawca *"
              className={classes.textField}
              margin="normal"
              type="text"
              name="wykonawca"
              defaultValue={this.state.karta.wykonawca}
              autoComplete="on"
              onChange={e => this.addWykonawca(e)}
            />

            <TextField
              label="Marka i typ sprzętu *"
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
            <TextField
              label="Nr. rejestracyjny *"
              className={classes.textField}
              margin="normal"
              type="text"
              name="rejestracja"
              defaultValue={this.state.karta.nrRej}
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
              label=" Data wystawienia karty"
              className={classes.textField}
              margin="normal"
              type="text"
              name="karta"
              defaultValue={this.state.karta.waznoscKarty}
              autoComplete="on"
              onChange={e => this.addWaznoscKarty(e)}
            />
            <TextField
              label=" Data zdania karty"
              className={classes.textField}
              margin="normal"
              type="text"
              name="karta"
              defaultValue={this.state.karta.dataZdania}
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
              defaultValue={this.state.karta.zadanie}
              autoComplete="on"
              onChange={e => this.addZadanie(e)}
            />

            <TextField
              label="  Kartę wystawił *"
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
              className={classes.textFieldAr}
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
              className={classes.textFieldAr}
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
            label=" Karte Pobrał *"
            className={classes.textField}
            margin="normal"
            type="text"
            name="pobierajacy"
            defaultValue={this.state.karta.pobierajacy}
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
                value={this.state.karta.rodzajRBH}
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
              label="Ilość Godzin *"
              className={classes.textField}
              style={{ width: "100px" }}
              margin="normal"
              type="text"
              defaultValue={this.state.karta.iloscRBH}
              name="iloscGodzin"
              onChange={e => this.addIloscRBH(e)}
            />
            <TextField
              label="Jednostek Sprzętu *"
              className={classes.textField}
              style={{ width: "150px" }}
              margin="normal"
              type="text"
              name=""
              onChange={e => this.addIloscSprzetuRBH(e)}
              defaultValue={this.state.karta.iloscSprzetuRBH}
            />
          </div>
        </Paper>

        {this.state.karta.CzCzynnosci.length > 0 ? (
          <TabelaCzynnosci zawartosCzynnosci={this.state.karta.CzCzynnosci} />
        ) : null}

        {/* edycja operacji w karcie */}

        {this.props.editOperacji ? (
          <Czynnosci>
            <Typography
              variant="headline"
              gutterBottom
              style={{ marginTop: "52px" }}
            >
              Edytujesz Czynność
            </Typography>
            <Container>
              <TextField
                label=" Operacja, czynność"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.edytowanaCz.CzOperacja}
                onChange={e => this.editCzOperacja(e)}
              />

              <TextField
                label=" Zużyto Roboczo Godzin"
                className={classes.textField}
                style={{ width: "200px" }}
                margin="normal"
                type="number"
                name="karta"
                defaultValue={this.props.edytowanaCz.CzRbh}
                onChange={e => this.editCzRbh(e)}
              />

              <TextField
                label="Data Wykonania"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.edytowanaCz.CzDataWyk}
                onChange={e => this.editCzDataWyk(e)}
              />

              <TextField
                label=" Wykonawca Nazwisko"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.edytowanaCz.CzWykonawca}
                onChange={e => this.editCzWykonawca(e)}
              />
            </Container>
            <Typography variant="headline" gutterBottom>
              Zużycie części i materiałów
            </Typography>

            <Container>
              <TextField
                label="Wyszczególnienie"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.edytowanaCz.CzWyszczegolnienie}
                onChange={e => this.editCzWyszczegolnienie(e)}
              />

              <TextField
                label="    Oznaczenie Katalogowe"
                className={classes.textField}
                style={{ width: "200px" }}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.edytowanaCz.CzOznaczenie}
                onChange={e => this.editCzOznaczenie(e)}
              />

              <TextField
                label="Ilość"
                className={classes.textField}
                margin="normal"
                type="number"
                name="karta"
                defaultValue={this.props.edytowanaCz.CzIlosc}
                onChange={e => this.editCzIlosc(e)}
              />

              <TextField
                label=" Nr. Asygnaty"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.edytowanaCz.CzAsygnata}
                onChange={e => this.editCzAsygnata(e)}
              />

              <TextField
                label=" Uwagi"
                className={classes.textField}
                margin="normal"
                type="text"
                name="karta"
                defaultValue={this.props.edytowanaCz.CzUwagi}
                onChange={e => this.editCzUwagi(e)}
              />
            </Container>

      <div>
      <Button
              variant="outlined"
              className={classes.button2}
              style={{ marginTop: "30px", bottom: "10px",padding: '11px',marginRight: "30px" }}
              onClick={() => this.editCzynnosci(this.state.CzCzynnosci)}
            >
              Zapisz zmiany
            </Button>
            <Button
            variant="contained"
            color="secondary"
            size="medium"
            onClick={() =>
            this.deleteCzCzynnosc()
            }
            className={classes.button}
            style={{marginLeft: "30px"}}
          >
            <DeleteOutlinedIcon className={classes.icon} />
            Usuń Czynność
          </Button>
      </div>
          </Czynnosci>
        ) : null}

        {/* koniec edycji operacji w karcie? */}

        {!this.props.editOperacji ? (
          <Button
            variant="outlined"
            className={classes.button2}
            style={{ marginTop: "50px", fontSize: "13px" }}
            onClick={this.onClickAction}
          >
            Dodaj Czynność
          </Button>
        ) : null}

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
                style={{ width: "200px" }}
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
            <Typography variant="headline" gutterBottom>
              Zużycie części i materiałów
            </Typography>

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
                style={{ width: "200px" }}
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
              color="default"
              aria-label="Add"
              className={classes.button}
              style={{ marginTop: "30px", bottom: "10px" }}
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
          label={
            this.state.karta.kartaZdana
              ? "karta zostala zdana"
              : "karta nie została zdana"
          }
        />

     
         {
           this.props.editOperacji ? 
           <Typography variant="headline" gutterBottom
           style={{ color: "red" }}>
           Zakończ edycje czynności aby móc zapisać kartę
         </Typography>

           :
           (
            <div style={{ display: "flex" }}>
            <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            style={{
              margin: "0",
              marginTop: "50px",
              marginBottom: "20px",
              marginRight: "40px"
            }}
            onClick={() =>
              this.props.onZamykanieKarty(
                this.props.kartaJestOtwarta,
                this.state.karta
              )
            }
          >
            <SaveIcon
              className={classNames(
                classes.leftIcon,
                classes.iconSmall,
                classes.icon
              )}
            />
            Zapisz Kartę
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            onClick={() =>
              window.confirm("Napewno chcesz usunąć kartę")
                ? this.props.onUsuwanie(this.state.karta)
                : null
            }
            className={classes.button}
            style={{
              margin: "0",
              marginTop: "50px",
              marginBottom: "20px",
              marginLeft: "40px"
            }}
          >
            <DeleteOutlinedIcon className={classes.icon} />
            Usuń Kartę
          </Button>
           </div>
           )
         }
       

        {this.state.drukowanie ? (
          <WrapPrint>
            <WygenerowanyKut
              kartaDoDruku={this.state.karta}
              style={{ left: "200px" }}
            />
            <WygenerowanyKut2 />
          </WrapPrint>
        ) : (
          <Button
            style={{ marginTop: "150px", marginBottom: "20px" }}
            variant="outlined"
            className={classes.button}
            onClick={e => this.drukuj(e)}
          >
            Drukuj
          </Button>
        )}
      </Wrapper>
    );
  }
}

const WrapPrint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  overflow: hidden;
  position: absolute;
  padding-top: 20px;
  top: 0;
  background: white;
  margin-left: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: calc(100% - 240px);
  z-index: 1;
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
  font-family: "Open Sans";
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
  return {
    rbhState: state.rodzajRBH,
    edytowanaCz: state.edytowanaCz,
    editOperacji: state.editOperacji
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onZamykanieKarty: (a, b) => dispatch(actions.zamykanieKarty(a, b)),
    onUsuwanie: a => dispatch(actions.usuwanieKarty(a)),
    editCzynnosci: a => dispatch(actions.aktualizacjaCzynnosci(a))
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(OtwartaKarta);
