import { ColorModeScript, ColorModeScriptProps } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';



export default class Document extends NextDocument {
    render():JSX.Element {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <ColorModeScript initialColorMode={"system"}/>
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        )
    }
}