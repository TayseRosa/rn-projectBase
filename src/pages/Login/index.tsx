import React, { useState } from "react";
import { Button } from 'react-native'

//Styles
import {
    Container,
    Header,
    Input,
    Status,
    CupomArea,
    CupomTitle,
} from './styles';

export function Login(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ status, setStatus ] = useState('');
    const [ showCupom, setShowCupom ] = useState(false);

    const handleVerifyLogin = async () => {
        setStatus('');
        setShowCupom(false);

        const req = await fetch('https://api.b7web.com.br/loginsimples/',{
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const json = await req.json();

        if( json.status == 'ok' ){
            setStatus('Acesso Liberado');
            setShowCupom(true);
        }else{
            setStatus('Acesso NEGADO!');
            setShowCupom(false);
        }

    }

    return(
        <Container>
            <Header> DESCONTO ULTRABLASTER </Header>

            <Input 
                placeholder="Digite seu email"
                value={email}
                onChangeText={ t=>setEmail(t) }
            />

            <Input 
                placeholder="Digite seu email"
                value={password}
                onChangeText={ p => setPassword(p) }
                secureTextEntry={ true }
            />

            <Button
                title="Verificar"
                onPress={handleVerifyLogin}
            />

            

            <Status>
                { status }
            </Status>

            { showCupom &&
                <CupomArea>
                    <CupomTitle> CÓDIGO DE CUPOM </CupomTitle>
                    <CupomTitle> TAY321DEV </CupomTitle>
                </CupomArea>
            }
        </Container>
    );
}
