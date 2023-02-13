import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
    deleteBanknote: (banknoteID: string)=> void
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
        <div>
            {props.money.banknotes === 'Dollars' ?
                <BanknoteGreen>{props.money.banknotes}
                <Value>{props.money.value}</Value>
                    <button onClick={()=> props.deleteBanknote(props.money.number)}>Потратил</button>
                </BanknoteGreen>

                : <BanknoteBlue>{props.money.banknotes}
                    <Value>{props.money.value}</Value>
                    <button onClick={()=> props.deleteBanknote(props.money.number)}>Потратил</button>
                </BanknoteBlue>
            }

        </div>
    );
};



const BanknoteGreen = styled.div`
  background-color: #61dafb;
  margin: 10px;
  width: 400px;
  height: 200px;

`;
const BanknoteBlue = styled.div`
    
    background-color: forestgreen;
    margin: 10px;
    width: 400px;
    height: 200px;
    
`
const Value = styled.div`
    
 
`
