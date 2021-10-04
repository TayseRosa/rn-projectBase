import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background-color: #333
`;

export const Header = styled.Text`
    color:#fff;
    font-size: 25px;
    text-align: center;
    margin-bottom: 30px;
`;

export const Input = styled.TextInput`
    height: 55px;
    font-size: 18px;
    color:#fff;
    background-color: #555;
    border-radius: 5px;
    margin-bottom: 20px;
    padding-left:10px;
    padding-right: 10px;
`;


export const Status = styled.Text`
    margin:50px;
    color:#fff;
    font-size:18px;
    text-align: center;
`;


export const CupomArea = styled.View`
    background-color: #fff;
    border-radius: 5px;
    padding:30px;
`;

export const CupomTitle = styled.Text`
    font-size: 18px;
    text-align:center;
    margin-bottom: 20px;
`;

export const CupomCode = styled.Text`
    text-align: center;
    font-size: 40px;
    font-weight: bold;
`;

export const ButtonVerify = styled.TouchableOpacity`
    background-color: #333;
    
    border-radius: 5px;
`;