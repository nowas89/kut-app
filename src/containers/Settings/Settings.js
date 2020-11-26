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
// import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
    },

    button: {
        margin: theme.spacing.unit,
        fontFamily: "Arial",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class Settings extends Component {
    state = {
        akronim: "",
        rodzajRBH: "",
        ostatniNumer: 0,
        person: "",
        wersja: this.props.wersja
    };
    addAkronim = (e) => {
        this.setState({
            akronim: e.target.value,
        });
    };
    addPerson = (e) => {
        this.setState({
            person: e.target.value,
        });
    };
    addTypRBH = (e) => {
        this.setState({
            rodzajRBH: e.target.value,
        });
    };
    addNowyNumerKarty = (e) => {
        this.setState({
            ostatniNumer: e.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Wrapper>
                <Typography variant="headline" gutterBottom>
                    Ustawienia Programu
                </Typography>
                <Paper
                    className={classes.root}
                    style={{ marginTop: "50px", width: "900px" }}
                    elevation={1}
                >
                    <Typography variant="subheading" gutterBottom>
                        Ustaw Akronim który będzie wyświetlany w numerze Kart np
                        " 12 / WŁ / 2018" (gdzie WŁ oznacza Warsztat Remontu
                        Sprzętu Łączności i Informatyki), <br />w sytuacji gdy
                        akronim nie zostanie podany numer karty będzie wyglądał
                        następująco " 12 / 2018"
                    </Typography>
                    <Wrap>
                        <TextField
                            label=" Ustaw Akronim Kart"
                            className={classes.textField}
                            margin="normal"
                            type="text"
                            name="karta"
                            defaultValue={this.props.akronim}
                            onChange={(e) => this.addAkronim(e)}
                        />{" "}
                        <span
                            onClick={() =>
                                this.props.onSaveAcronim(this.state.akronim)
                            }
                        >
                            <SaveIcon
                                style={{ color: "rgba(0, 0 ,0 , 0.3)" }}
                            />
                        </span>
                    </Wrap>
                </Paper>

                <Paper
                    className={classes.root}
                    style={{ marginTop: "50px", width: "900px" }}
                    elevation={1}
                >
                    <Typography variant="subheading" gutterBottom>
                        Skonfiguruj typ, kategorie lub rodzaj sprzętu
                        potrzebnego do prowadzenia Ewidencji Godzin Pracy
                    </Typography>
                    <Wrap>
                        <TextField
                            label="typ, kategoria lub rodzaj"
                            className={classes.textField}
                            margin="normal"
                            type="text"
                            onChange={(e) => this.addTypRBH(e)}
                        />
                        <span
                            onClick={() =>
                                this.props.onSaveRBH(this.state.rodzajRBH)
                            }
                        >
                            <SaveIcon
                                style={{ color: "rgba(0, 0 ,0 , 0.3)" }}
                            />
                        </span>
                    </Wrap>
                    {this.props.rbhState.length > 0
                        ? this.props.rbhState.map((rodzaj, i) => (
                              <List
                                  key={i}
                                  style={{
                                      width: "220px",
                                      position: "relative",
                                  }}
                              >
                                  <ListItem
                                      style={{
                                          fontSize: "12px",
                                          boxShadow:
                                              "0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
                                          textAlign: "center",
                                          borderRadius: "50px",
                                      }}
                                  >
                                      {rodzaj}{" "}
                                      <DeleteOutlinedIcon
                                          className={classes.icon}
                                          style={{
                                              position: "absolute",
                                              right: "10px",
                                              bottom: "8px",
                                              color: "rgba(0, 0 ,0 , 0.3)",
                                          }}
                                          onClick={() =>
                                              this.props.onDeleteRBH(rodzaj)
                                          }
                                      />
                                  </ListItem>
                              </List>
                          ))
                        : null}
                </Paper>

                <Paper2
                    className={classes.root}
                    style={{ marginTop: "50px", width: "900px" }}
                    elevation={1}
                >
                    <Typography variant="subheading" gutterBottom>
                        Dodaj osoby uprawnione do wystawiania kart i weryfikacji
                    </Typography>
                    <Wrap>
                        <TextField
                            label="stopień, imię i nazwisko"
                            className={classes.textField}
                            margin="normal"
                            type="text"
                            onChange={(e) => this.addPerson(e)}
                        />{" "}
                        <span
                            onClick={() =>
                                this.props.onSavePerson(this.state.person)
                            }
                        >
                            <SaveIcon
                                style={{ color: "rgba(0, 0 ,0 , 0.3)" }}
                            />
                        </span>
                    </Wrap>
                    {this.props.persons.length > 0
                        ? this.props.persons.map((person, i) => (
                              <List
                                  key={i}
                                  style={{
                                      width: "220px",
                                      position: "relative",
                                  }}
                              >
                                  <ListItem
                                      style={{
                                          fontSize: "12px",
                                          boxShadow:
                                              "0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
                                          textAlign: "center",
                                          borderRadius: "50px",
                                      }}
                                  >
                                      {person}
                                      <DeleteOutlinedIcon
                                          className={classes.icon}
                                          style={{
                                              position: "absolute",
                                              right: "10px",
                                              bottom: "8px",
                                              color: "rgba(0, 0 ,0 , 0.3)",
                                          }}
                                          onClick={() =>
                                              this.props.onDeletePerson(person)
                                          }
                                      />
                                  </ListItem>
                              </List>
                          ))
                        : null}
                </Paper2>
                <Paper
                    className={classes.root}
                    style={{ marginTop: "50px", width: "900px" }}
                    elevation={1}
                >
                    <Typography variant="subheading" gutterBottom>
                        Ustaw ręcznie ostatni numer Karty Usług Technicznych w
                        sytuacji gdy program został wdrżony w okresie innym niż
                        1 stycznia bieżącego roku.
                        <br />
                        Ustawiony numer musi być numerem ostatniej wystawionej
                        Karty Usług Technicznych.
                    </Typography>
                    <Typography
                        variant="subheading"
                        gutterBottom
                        style={{ color: "red" }}
                    >
                        {this.props.nowyNumerKuta
                            ? "Obecny Numer Karty:   " + this.props.ostatniNumer
                            : "Numer nie został ustawiony"}
                    </Typography>
                    <Wrap>
                        <TextField
                            label="Numer Ostatniej Karty"
                            className={classes.textField}
                            margin="normal"
                            type="text"
                            onChange={(e) => this.addNowyNumerKarty(e)}
                        />{" "}
                        <span
                            onClick={() =>
                                this.props.onNowyNumerKarty(
                                    this.state.ostatniNumer
                                )
                            }
                        >
                            <SaveIcon
                                style={{ color: "rgba(0, 0 ,0 , 0.3)" }}
                            />
                        </span>
                    </Wrap>
                    <Typography variant="caption" gutterBottom>
                        Aby wrócić do numeracji Kart Usług Technicznych w
                        kolejności według Lp. proszę wpisać 0 w pole
                        wprowadzania tekstu.
                    </Typography>
                </Paper>

                <Paper
                    className={classes.root}
                    style={{
                        marginTop: "50px",
                        width: "900px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    elevation={1}
                >
                    <Typography
                        variant="subheading"
                        gutterBottom
                        style={{ textAlign: "center" }}
                    >
                        Aby wrócić do ustawień początkowych programu wciśnij
                        przycisk " Przywróć Ustawienia Początkowe"
                    </Typography>

                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        style={{
                            fontSize: "14px",
                            marginTop: "35px",
                            marginBottom: "35px",
                        }}
                        onClick={() =>
                            window.confirm(
                                "Napewno chcesz przywrócić stan początkowy aplikacji ? \n  Po potwierdzeniu wyboru dane programu zostaną skasowanie nieodwracalnie!!! \n Upewnij się czy eksportowałeś wszystkie dane do plików XML "
                            )
                                ? this.props.onResetState()
                                : null
                        }
                    >
                        Przywróć Ustawienia Początkowe
                    </Button>
                    <Typography
                        variant="caption"
                        gutterBottom
                        style={{ color: "red", textAlign: "center" }}
                    >
                        Uwaga!! <br /> Po użyciu przycisku "Przywróć Ustawienia
                        Początkowe" dane programu zostaną skasowanie
                        nieodwracalnie!!! <br />
                        Upewnij się czy eksportowałeś wszystkie dane do plików
                        XML
                    </Typography>
                </Paper>

                <Typography
                    style={{ position: "absolute", bottom: "-30px" }}
                    variant="caption"
                    gutterBottom
                >
                    wszystkie prawa zastrzeżone - Paweł Naworol @
                    pawel.naworol@icloud.com
                </Typography>
                <Typography
                    variant="caption"
                    gutterBottom
                    style={{ position: "absolute", bottom: "-50px" }}
                >
                    Wersja programu: {this.state.wersja}
                </Typography>
                <input id="myFile"  webkitdirectory type="file" multiple />
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    margin-top: 40px;
    margin-left: 250px;
    min-height: 750px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Helvetica";
    font-weight: 400;
`;
const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: "Helvetica";
    font-weight: 400;
`;
const Paper2 = styled(Paper)`
    display: flex;
    flex-direction: column;
`;

const mapStateToProps = (state) => {
    return {
        wersja: state.wersja,
        akronim: state.akronim,
        rbhState: state.rodzajRBH,
        ostatniNumer: state.ostatniNumer,
        nowyNumerKuta: state.nowyNumerKuta,
        wystepujaceRBH: state.rodzajRBH,
        persons: state.persons,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveAcronim: (a) => dispatch(actions.saveAcronim(a)),
        onSaveRBH: (a) => dispatch(actions.saveRodzajRBH(a)),
        onDeleteRBH: (a) => dispatch(actions.deleteRodzajRBH(a)),
        onSavePerson: (a) => dispatch(actions.savePerson(a)),
        onDeletePerson: (a) => dispatch(actions.deletePerson(a)),
        onNowyNumerKarty: (a) => dispatch(actions.nowyNumerKarty(a)),
        onResetState: () => dispatch(actions.resetState()),
    };
};
export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(Settings);
