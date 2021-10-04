import React, { useEffect, useState } from "react";
import {  ActivityIndicator } from 'react-native';

//Libs
import { Ionicons } from '@expo/vector-icons';

//Styles
import {
  Container, 
  LoadingArea,
  LoadingText,
  Title,
  TotalMoviesText,
  List,
  MovieItem,
  MovieImage,
  MovieTitle
} from './styles';

export function Home(){
    const [ loading, setLoading ] = useState(true);
    const [ movies, setMovies ] = useState([]);
    
    useEffect(()=>{
      const requestMovies = async () => {
        setLoading(true);
  
        const req = await fetch('https://api.b7web.com.br/cinema/');
        const json = await req.json();
        
        if (json){
          setMovies(json);
        }
        setLoading(false);
      }
  
      requestMovies();
    }, []); 

    return(
      <Container>

      { loading &&
        <LoadingArea>
          <ActivityIndicator size="large" color="#fff" />
          <LoadingText> Carregando... </LoadingText>
        </LoadingArea>
      }

      { !loading && 
        <>
        <Title> <Ionicons name="md-checkmark-circle" size={32} color="green" /> API DE FILMES  </Title>
        <TotalMoviesText > Total de filmes: ( { movies.length } ) </TotalMoviesText>

        <List 
          data={movies}
          renderItem={({ item })=>(
            <MovieItem>
              <MovieImage source={{ uri: item.avatar }} resizeMode="contain" />
              <MovieTitle> { item.titulo } </MovieTitle>
            </MovieItem>
          )}
          keyExtractor={ item => item.titulo}
        />
        </>
      }
    </Container>
    );
}

  