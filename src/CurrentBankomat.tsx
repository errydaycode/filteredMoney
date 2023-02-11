import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
/*

        props.money.banknotes === 'Dollars'
            ? <BanknoteGreen>
                <Name>{props.money.banknotes}</Name>
                <Nominal>{props.money.value}</Nominal>
            </BanknoteGreen>

            : <BanknoteBlue>
                <Name>{props.money.banknotes}</Name>
                <Nominal>{props.money.value}</Nominal>
            </BanknoteBlue>
*/

                <BanknoteGreen color={props.money.banknotes ==='Dollars' ? 'forestgreen': 'dodgerblue'}>
                        <Name>{props.money.banknotes}</Name>
                        <Nominal>{props.money.value}</Nominal>
                   </BanknoteGreen>



    );
};

const BanknoteUniversal = styled.div`
  background-color: ${props => {
    if (props.color === 'forestgreen') {
      return 'forestgreen'
    } else {
      return 'dodgerblue'
    }
  }}
  width: 400px;
  height: 200px;
  margin: 10px;
`

const BanknoteGreen = styled.div`
  background-color: forestgreen;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const BanknoteBlue = styled.div`
  background-color: dodgerblue;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
`

const Nominal = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 50px;
`