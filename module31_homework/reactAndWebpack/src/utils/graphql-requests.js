import { gql } from "@apollo/react-hooks"

export const GET_CARS = gql`
    query getCars ($getCarsInput: GetCarsInput!){
        Car(getCarsInput: $getCarsInput){
            id
            brand
            model
            yearIssue
            governmentNumber
            vin
            color
            drive
            Enginefuel
            Enginevolume
            Enginepower
            transmission
            mileage
            VPSerialAndNumber
            VRCSerialAndNumber
            PriceOne
            PriceTwo
            PriceThree
            Osago
            Kasko
        }
    }
`;
// export const ADD_RESERV = gql``
// export const GET_RESERV = gql``