import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import styled from "styled-components";
import compose from "recompose/compose";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./TabelaEwidencyjna/style.css";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// import styled from "styled-components";
const styles = (theme) => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto",
    },
    table: {
        minWidth: 700,
        padding: 0,
    },
    row: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.background.default,
        },
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        fontSize: 10,
    },
    button: {
        margin: theme.spacing.unit,
        fontFamily: "Arial",
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 220,
    },
});
class TabelaGlowna extends Component {
    state = {
        searchString: "",

        sorted: false,
    };
    przeszukajKarty = (e) => {
        this.setState({
            searchString: e.target.value.toLowerCase(),
        });
    };

    sort = () => {
        this.setState({
            sorted: !this.state.sorted,
        });
    };

    resetState = (e) => {
        setTimeout(() => {
            this.setState({ searchString: "" });
        }, 50);
    };

    render() {
        const { classes } = this.props;
        let newArray;

        if (this.state.sorted) {
            newArray = this.props.karty.sort(
                (a, b) =>
                    Number(a.numerKuta.split("/")[0]) -
                    Number(b.numerKuta.split("/")[0])
            );
        } else {
            newArray = this.props.karty.sort(
                (a, b) =>
                    Number(b.numerKuta.split("/")[0]) -
                    Number(a.numerKuta.split("/")[0])
            );
        }

        console.log("[sortowanie]", newArray);
        let searchString = this.state.searchString.trim().toLowerCase();

        if (searchString.length > 0 && this.props.zdaneKarty) {
            newArray = newArray.filter((karta) => {
                return (
                    (karta.numerKuta
                        .toLowerCase()
                        .includes(this.state.searchString) &&
                        !karta.kartaZdana) ||
                    (karta.pobierajacy
                        .toLowerCase()
                        .includes(this.state.searchString) &&
                        !karta.kartaZdana) ||
                    (karta.marka
                        .toLowerCase()
                        .includes(this.state.searchString) &&
                        !karta.kartaZdana) ||
                    (karta.nrRej
                        .toLowerCase()
                        .includes(this.state.searchString) &&
                        !karta.kartaZdana) ||
                    (karta.wlasciciel
                        .toLowerCase()
                        .includes(this.state.searchString) &&
                        !karta.kartaZdana) ||
                    (karta.wystawiajacy
                        .toLowerCase()
                        .includes(this.state.searchString) &&
                        !karta.kartaZdana)
                );
            });
        } else if (searchString.length > 0 && !this.props.zdaneKarty) {
            newArray = newArray.filter((karta) => {
                return (
                    karta.numerKuta
                        .toLowerCase()
                        .includes(this.state.searchString) ||
                    karta.pobierajacy
                        .toLowerCase()
                        .includes(this.state.searchString) ||
                    karta.marka
                        .toLowerCase()
                        .includes(this.state.searchString) ||
                    karta.nrRej
                        .toLowerCase()
                        .includes(this.state.searchString) ||
                    karta.wlasciciel
                        .toLowerCase()
                        .includes(this.state.searchString) ||
                    karta.wystawiajacy
                        .toLowerCase()
                        .includes(this.state.searchString)
                );
            });
        } else if (searchString.length === 0 && this.props.zdaneKarty) {
            newArray = newArray.filter((karta) => {
                return (
                    (karta.numerKuta
                        .toLowerCase()
                        .includes(this.state.searchString) &&
                        !karta.kartaZdana) ||
                    (karta.pobierajacy
                        .toLowerCase()
                        .includes(this.state.searchString) &&
                        !karta.kartaZdana) ||
                    (karta.marka
                        .toLowerCase()
                        .includes(this.state.searchString) &&
                        !karta.kartaZdana) ||
                    (karta.nrRej
                        .toLowerCase()
                        .includes(this.state.searchString) &&
                        !karta.kartaZdana) ||
                    (karta.wlasciciel
                        .toLowerCase()
                        .includes(this.state.searchString) &&
                        !karta.kartaZdana) ||
                    (karta.wystawiajacy
                        .toLowerCase()
                        .includes(this.state.searchString) &&
                        !karta.kartaZdana)
                );
            });
        }

        console.log(new Date());

        return (
            <Wrapper>
                <Paper
                    variant="outlined"
                    style={{
                        position: "relative",
                        marginTop: "30px",
                        padding: "10px",
                        width: "310px",
                    }}
                >
                    <Typography variant="subheading" gutterBottom style={{}}>
                        Przeszukaj Karty
                    </Typography>
                    <TextField
                        label="Szukaj"
                        className={classes.textField}
                        margin="normal"
                        type="text"
                        defaultValue={this.state.searchString}
                        autoComplete="on"
                        onChange={(e) => this.przeszukajKarty(e)}
                    />

                    <FormControlLabel
                        style={{
                            margin: "0",
                            display: "flex",
                            justifyContent: "center",
                        }}
                        control={
                            <Checkbox
                                checked={this.props.zdaneKarty}
                                onChange={(e) => this.props.zdaneKartyFun(e)}
                                value="kartaZdana"
                                color="primary"
                            />
                        }
                        label={
                            this.props.zdaneKarty
                                ? "Przeszukujesz Niezdane Karty"
                                : "Przeszukaj Niezdane Karty"
                        }
                    />
                </Paper>
                <Paper className={classes.root} variant="outlined" ś>
                    <Table className={classes.table} id="tabelaKart">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    style={{
                                        textAlign: "center",
                                        padding: "4px 10px 4px 24px",
                                        fontSize: 12,
                                    }}
                                >
                                    Lp.
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: 12,
                                        // boxSizing: "border-box",

                                    }}
                                >
                                    Numer Karty
                                    {this.state.sorted ? (
                                        <SVG
                                            onClick={() => this.sort()}
                                            width="25"
                                            height="25"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                        >
                                            <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
                                        </SVG>
                                    ) : (
                                        <SVGS
                                            onClick={() => this.sort()}
                                            width="25"
                                            height="25"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                        >
                                            <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
                                        </SVGS>
                                    )}
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "center",
                                        padding: "4px 10px 4px 24px",
                                        fontSize: 12,
                                    }}
                                >
                                    Marka i Typ
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "center",
                                        padding: "4px 10px 4px 24px",
                                        fontSize: 12,
                                    }}
                                >
                                    Nr Rejestracyjny
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "center",
                                        padding: "4px 10px 4px 24px",
                                        fontSize: 12,
                                    }}
                                >
                                    Właściciel
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "center",
                                        padding: "4px 10px 4px 24px",
                                        fontSize: 12,
                                    }}
                                >
                                    Termin Wykonania
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "center",
                                        padding: "4px 10px 4px 24px",
                                        fontSize: 12,
                                    }}
                                >
                                    Data Wystawienia
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "center",
                                        padding: "4px 10px 4px 24px",
                                        fontSize: 12,
                                    }}
                                >
                                    Zadanie
                                </TableCell>

                                <TableCell
                                    style={{
                                        textAlign: "center",
                                        padding: "4px 10px 4px 24px",
                                        fontSize: 12,
                                    }}
                                >
                                    Pobierający
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "center",
                                        padding: "4px 10px 4px 24px",
                                        fontSize: 12,
                                    }}
                                >
                                    Karta Została Zdana
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {this.state.searchString !== "" ||
                            this.props.zdaneKarty
                                ? newArray.map((karta, i) => (
                                      <TableRow
                                          key={i + 1}
                                          className={classes.row}
                                          onClick={() =>
                                              this.props.onOpeningKut(karta)
                                          }
                                      >
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {i + 1}
                                          </TableCell>
                                          {console.log(
                                              new Date(
                                                  karta.terminWykonania.split(
                                                      "."
                                                  )[2],
                                                  Number(
                                                      karta.terminWykonania.split(
                                                          "."
                                                      )[1]
                                                  ) - 1,
                                                  karta.terminWykonania.split(
                                                      "."
                                                  )[0]
                                              )
                                          )}
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.numerKuta}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.marka}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.nrRej}
                                          </TableCell>

                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.wlasciciel}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {new Date() >
                                                  new Date(
                                                      karta.terminWykonania.split(
                                                          "."
                                                      )[2],
                                                      Number(
                                                          karta.terminWykonania.split(
                                                              "."
                                                          )[1]
                                                      ) - 1,
                                                      karta.terminWykonania.split(
                                                          "."
                                                      )[0]
                                                  ) && !karta.kartaZdana ? (
                                                  <h3
                                                      style={{
                                                          color: "red",
                                                      }}
                                                  >
                                                      {karta.terminWykonania}
                                                  </h3>
                                              ) : (
                                                  karta.terminWykonania
                                              )}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.waznoscKarty}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.zadanie}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.pobierajacy}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.kartaZdana ? (
                                                  "TAK"
                                              ) : (
                                                  <h3
                                                      style={{
                                                          color: "red",
                                                      }}
                                                  >
                                                      NIE
                                                  </h3>
                                              )}
                                          </TableCell>
                                      </TableRow>
                                  ))
                                : this.props.karty.map((karta, i) => (
                                      <TableRow
                                          key={i + 1}
                                          className={classes.row}
                                          onClick={() =>
                                              this.props.onOpeningKut(karta)
                                          }
                                      >
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {i + 1}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.numerKuta}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.marka}
                                          </TableCell>
                                          {console.log(
                                              new Date(
                                                  karta.terminWykonania.split(
                                                      "."
                                                  )[2],
                                                  Number(
                                                      karta.terminWykonania.split(
                                                          "."
                                                      )[1]
                                                  ) - 1,
                                                  karta.terminWykonania.split(
                                                      "."
                                                  )[0]
                                              )
                                          )}
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.nrRej}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.wlasciciel}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {new Date() >
                                                  new Date(
                                                      karta.terminWykonania.split(
                                                          "."
                                                      )[2],
                                                      Number(
                                                          karta.terminWykonania.split(
                                                              "."
                                                          )[1]
                                                      ) - 1,
                                                      karta.terminWykonania.split(
                                                          "."
                                                      )[0]
                                                  ) && !karta.kartaZdana ? (
                                                  <h3
                                                      style={{
                                                          color: "red",
                                                      }}
                                                  >
                                                      {karta.terminWykonania}
                                                  </h3>
                                              ) : (
                                                  karta.terminWykonania
                                              )}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.waznoscKarty}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.zadanie}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.pobierajacy}
                                          </TableCell>
                                          <TableCell
                                              style={{
                                                  textAlign: "center",
                                                  padding: "4px 10px 4px 24px",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {karta.kartaZdana ? (
                                                  "TAK"
                                              ) : (
                                                  <h3
                                                      style={{
                                                          color: "red",
                                                      }}
                                                  >
                                                      NIE
                                                  </h3>
                                              )}
                                          </TableCell>
                                      </TableRow>
                                  ))}
                        </TableBody>
                    </Table>
                </Paper>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="buttonTable"
                    table="tabelaKart"
                    filename="Tabela Kart Usług Technicznych"
                    sheet="tablexls"
                    buttonText="Eksportuj Listę do XML"
                />
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Arial";
    font-weight: 400;
    min-height: 740px;
    width: 95%;
`;
const SVG = styled.svg`
    padding: 3px;
    cursor: pointer;
`;

const SVGS = styled.svg`
    transform: rotate(180deg);
    cursor: pointer;
`;
const mapStateToProps = (state) => {
    return {
        karty: state.karty,
        zdaneKarty: state.zdaneKarty,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOpeningKut: (karta) => dispatch(actions.openKut(karta)),
        zdaneKartyFun: (event) => dispatch(actions.zdaneKarty(event)),
    };
};
export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(TabelaGlowna);
