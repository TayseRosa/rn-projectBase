import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    top:100px;
    background-color: #222;
    align-items: center;
    justify-content: center;
`;

export const LoadingArea = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color:#fff;
    font-size: 24px;
    font-weight: bold;
`;

export const LoadingText = styled.Text`
    color:#fff;
`;

export const TotalMoviesText = styled.Text`
    color:#fff;
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const List = styled.FlatList`
    flex:1;
`;

export const MovieItem = styled.View`
    margin-bottom: 30px;
`;

export const MovieImage = styled.Image`
    height: 400px;
`;

export const MovieTitle = styled.Text`
    color:#dedede;
    text-align: center;
    margin-top: 5px;
    font-size: 24px;
`;