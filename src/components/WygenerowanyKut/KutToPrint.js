import React, {Component} from 'react';

// import styled from 'styled-components'
import './kut.css'

 
class KutToPrint extends Component {
  render() {
    const {numerKuta, wykonawca, marka,nrRej,wlasciciel,terminWykonania,zadanie,wystawiajacy, opis, uwagi} = this.props.kartaDoDruku;

    return (

     <div className='wrapper'>
    <div className="kut-info">
            <h1 className="head-text">KARTA USŁUGI TECHNICZNEJ</h1>
            <div className="numer-kuta"><h1>{numerKuta}</h1></div>
        </div>
        <div className="main">
            <div className="first-row">
                <div className="first"><h3>WYKONAWCA:</h3><h1>{wykonawca}</h1></div>
                <div className="second"><h3>MARKA I TYP SPRZĘTU:</h3><h1>{marka}</h1></div>
                <div className="third"><h3>MER:</h3><h1>{nrRej}</h1></div>
                <div className="four"><h3>SPRZĘT NALEŻY DO:</h3><h1>{wlasciciel}</h1></div>
                <div className="five"><h3>TERMIN WYKONANIA:</h3><h1>{terminWykonania}</h1></div>
            </div>
            <div className="second-row">
                <div className="first"><h3>ZADANIE:</h3><h1>{zadanie}</h1></div>
                <div className="second"><h4 style={{left: '65px', bottom: "1px"}}>(stopień, nazwisko)</h4><h4 style={{right: '85px', bottom: "1px"}}>(podpis, data))</h4><h1>{ wystawiajacy}</h1> <h1>{terminWykonania}</h1></div>
            </div>
            <div className="third-row">
                <div className="first"><h3>W CZASIE DEFEKTACJI (BADAŃ DIAGNOSTYCZNYCH) STWIERDZONO KONIECZNOŚĆ WYKONIANIA NASTĘPUJĄCYCH PRAC:</h3>
                <h1 style={{paddingTop: '10px'}}>{opis}</h1></div>
                <div className="second">
                <h3>UWAGI PRZYJMUJĄCEGO:</h3>
                <h1 style={{paddingTop: '10px'}}>{uwagi}</h1></div>

            </div>
            <h1>ROZLICZENIE WYKONANIA ZADANIA</h1>
            <div className="fourth-row">
                <div className="fourth-static">
                    <div className="first">
                        <div className="first-1">
                            <h2>Operacja, czynność</h2>
                        </div>
                        <div className="first-2">
                            <h2>1</h2>
                        </div>
                    </div>
                    <div className="second">
                        <div className="second-1">
                            <h2>Zużyto
                            rbg
                            </h2>
                        </div>
                        <div className="second-2">
                            <h2>2</h2>
                        </div>
                    </div>
                    <div className="third">


                        <div className="third-1">
                            <h2>Data wykonania</h2>
                        </div>
                        <div className="third-2">
                            <h2>3</h2>
                        </div>
                    </div>
                    <div className="fourth">
                        <div className="fourth-1">
                            <h2>Wykonawca</h2>
                        </div>
                        <div className="fourth-main">
                            <div className="fourth-div1">
                                <div className="fourth-div1-row1">
                                    <h2>Nazwisko</h2>
                                </div>
                                <div className="fourth-div1-row2">
                                    <h2>4</h2>
                                </div>
                            </div>

                            <div className="fourth-div2">
                                <div className="fourth-div2-row1">
                                    <h2>Podpis</h2>
                                </div>
                                <div className="fourth-div2-row2">
                                    <h2>5</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fiveth">
                        <div className="fiveth-div">

                            <div className="fiveth-div1">
                                <h2>Zużycie części i materiałów</h2>
                            </div>
                            <div className="fiveth-main">
                                <div className="fiveth-div1">
                                    <div className="fiveth-div1-row1">
                                        <h2>Wyszczególnenie</h2>
                                    </div>
                                    <div className="fiveth-div1-row2">
                                        <h2>6</h2>
                                    </div>
                                </div>
                                <div className="fiveth-div2">
                                    <div className="fiveth-div2-row1">
                                        <h2>Oznaczenie</h2>
                                    </div>
                                    <div className="fiveth-div2-row2">
                                        <h2>7</h2>
                                    </div>
                                </div>
                                <div className="fiveth-div3">
                                    <div className="fiveth-div3-row1">
                                        <h2>Ilość</h2>
                                    </div>
                                    <div className="fiveth-div3-row2">
                                        <h2>8</h2>
                                    </div>
                                </div>
                                <div className="fiveth-div4">
                                    <div className="fiveth-div4-row1">
                                        <h2>Nr asygnaty</h2>
                                    </div>
                                    <div className="fiveth-div4-row2">
                                        <h2>9</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sixth">
                        <div className="sixth-1">
                            <h2>Uwagi
                            </h2>
                        </div>
                        <div className="sixth-2">
                            <h2>10</h2>
                        </div>
                    </div>
                </div>


                <div className="task-row">
                    <div className="row1">
                        <h2></h2>
                    </div>
                    <div className="row2">
                        <h2></h2>
                    </div>
                    <div className="row3">
                        <h2></h2>
                    </div>
                    <div className="row4">
                        <h2></h2>
                    </div>
                    <div className="row5">
                        <h2></h2>
                    </div>
                    <div className="row6">
                        <h2></h2>
                    </div>
                    <div className="row7">
                        <h2></h2>
                    </div>
                    <div className="row8">
                        <h2></h2>
                    </div>
                    <div className="row9">
                        <h2></h2>
                    </div>
                    <div className="row10">
                        <h2></h2>
                    </div>


                </div>

                <div className="task-row">
                    <div className="row1">
                        <h2></h2>
                    </div>
                    <div className="row2">
                        <h2></h2>
                    </div>
                    <div className="row3">
                        <h2></h2>
                    </div>
                    <div className="row4">
                        <h2></h2>
                    </div>
                    <div className="row5">
                        <h2></h2>
                    </div>
                    <div className="row6">
                        <h2></h2>
                    </div>
                    <div className="row7">
                        <h2></h2>
                    </div>
                    <div className="row8">
                        <h2></h2>
                    </div>
                    <div className="row9">
                        <h2></h2>
                    </div>
                    <div className="row10">
                        <h2></h2>
                    </div>


                </div>
                <div className="task-row">
                    <div className="row1">
                        <h2></h2>
                    </div>
                    <div className="row2">
                        <h2></h2>
                    </div>
                    <div className="row3">
                        <h2></h2>
                    </div>
                    <div className="row4">
                        <h2></h2>
                    </div>
                    <div className="row5">
                        <h2></h2>
                    </div>
                    <div className="row6">
                        <h2></h2>
                    </div>
                    <div className="row7">
                        <h2></h2>
                    </div>
                    <div className="row8">
                        <h2></h2>
                    </div>
                    <div className="row9">
                        <h2></h2>
                    </div>
                    <div className="row10">
                        <h2></h2>
                    </div>


                </div>
                <div className="task-row">
                    <div className="row1">
                        <h2></h2>
                    </div>
                    <div className="row2">
                        <h2></h2>
                    </div>
                    <div className="row3">
                        <h2></h2>
                    </div>
                    <div className="row4">
                        <h2></h2>
                    </div>
                    <div className="row5">
                        <h2></h2>
                    </div>
                    <div className="row6">
                        <h2></h2>
                    </div>
                    <div className="row7">
                        <h2></h2>
                    </div>
                    <div className="row8">
                        <h2></h2>
                    </div>
                    <div className="row9">
                        <h2></h2>
                    </div>
                    <div className="row10">
                        <h2></h2>
                    </div>


                </div>
                <div className="task-row">
                    <div className="row1">
                        <h2></h2>
                    </div>
                    <div className="row2">
                        <h2></h2>
                    </div>
                    <div className="row3">
                        <h2></h2>
                    </div>
                    <div className="row4">
                        <h2></h2>
                    </div>
                    <div className="row5">
                        <h2></h2>
                    </div>
                    <div className="row6">
                        <h2></h2>
                    </div>
                    <div className="row7">
                        <h2></h2>
                    </div>
                    <div className="row8">
                        <h2></h2>
                    </div>
                    <div className="row9">
                        <h2></h2>
                    </div>
                    <div className="row10">
                        <h2></h2>
                    </div>


                </div>
                <div className="task-row">
                    <div className="row1">
                        <h2></h2>
                    </div>
                    <div className="row2">
                        <h2></h2>
                    </div>
                    <div className="row3">
                        <h2></h2>
                    </div>
                    <div className="row4">
                        <h2></h2>
                    </div>
                    <div className="row5">
                        <h2></h2>
                    </div>
                    <div className="row6">
                        <h2></h2>
                    </div>
                    <div className="row7">
                        <h2></h2>
                    </div>
                    <div className="row8">
                        <h2></h2>
                    </div>
                    <div className="row9">
                        <h2></h2>
                    </div>
                    <div className="row10">
                        <h2></h2>
                    </div>


                </div>
                <div className="task-row">
                    <div className="row1">
                        <h2></h2>
                    </div>
                    <div className="row2">
                        <h2></h2>
                    </div>
                    <div className="row3">
                        <h2></h2>
                    </div>
                    <div className="row4">
                        <h2></h2>
                    </div>
                    <div className="row5">
                        <h2></h2>
                    </div>
                    <div className="row6">
                        <h2></h2>
                    </div>
                    <div className="row7">
                        <h2></h2>
                    </div>
                    <div className="row8">
                        <h2></h2>
                    </div>
                    <div className="row9">
                        <h2></h2>
                    </div>
                    <div className="row10">
                        <h2></h2>
                    </div>


                </div>
                <div className="task-row">
                    <div className="row1">
                        <h2></h2>
                    </div>
                    <div className="row2">
                        <h2></h2>
                    </div>
                    <div className="row3">
                        <h2></h2>
                    </div>
                    <div className="row4">
                        <h2></h2>
                    </div>
                    <div className="row5">
                        <h2></h2>
                    </div>
                    <div className="row6">
                        <h2></h2>
                    </div>
                    <div className="row7">
                        <h2></h2>
                    </div>
                    <div className="row8">
                        <h2></h2>
                    </div>
                    <div className="row9">
                        <h2></h2>
                    </div>
                    <div className="row10">
                        <h2></h2>
                    </div>


                </div>
                <div className="task-row">
                    <div className="row1">
                        <h2></h2>
                    </div>
                    <div className="row2">
                        <h2></h2>
                    </div>
                    <div className="row3">
                        <h2></h2>
                    </div>
                    <div className="row4">
                        <h2></h2>
                    </div>
                    <div className="row5">
                        <h2></h2>
                    </div>
                    <div className="row6">
                        <h2></h2>
                    </div>
                    <div className="row7">
                        <h2></h2>
                    </div>
                    <div className="row8">
                        <h2></h2>
                    </div>
                    <div className="row9">
                        <h2></h2>
                    </div>
                    <div className="row10">
                        <h2></h2>
                    </div>


                </div>
                <div className="task-row">
                    <div className="row1">
                        <h2></h2>
                    </div>
                    <div className="row2">
                        <h2></h2>
                    </div>
                    <div className="row3">
                        <h2></h2>
                    </div>
                    <div className="row4">
                        <h2></h2>
                    </div>
                    <div className="row5">
                        <h2></h2>
                    </div>
                    <div className="row6">
                        <h2></h2>
                    </div>
                    <div className="row7">
                        <h2></h2>
                    </div>
                    <div className="row8">
                        <h2></h2>
                    </div>
                    <div className="row9">
                        <h2></h2>
                    </div>
                    <div className="row10">
                        <h2></h2>
                    </div>


                </div>
                <div className="task-row">
                    <div className="row1">
                        <h2></h2>
                    </div>
                    <div className="row2">
                        <h2></h2>
                    </div>
                    <div className="row3">
                        <h2></h2>
                    </div>
                    <div className="row4">
                        <h2></h2>
                    </div>
                    <div className="row5">
                        <h2></h2>
                    </div>
                    <div className="row6">
                        <h2></h2>
                    </div>
                    <div className="row7">
                        <h2></h2>
                    </div>
                    <div className="row8">
                        <h2></h2>
                    </div>
                    <div className="row9">
                        <h2></h2>
                    </div>
                    <div className="row10">
                        <h2></h2>
                    </div>


                </div>
            </div>
        </div>
     </div>
   
    );
  }
}




export default KutToPrint