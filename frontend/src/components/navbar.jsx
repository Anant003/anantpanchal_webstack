import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Heading, Provider, defaultTheme } from '@adobe/react-spectrum';

export default function Navbar() {
    return (
        <Provider theme={defaultTheme} backgroundColor="Blue-700" padding="size-200" flexDirection="row" justifyContent="space-between">
            <Flex justifyContent="space-between" alignItems="center">
                <Heading level={2}>Portfolio</Heading>
                <Flex>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/contact">Contact</Link>
                </Flex>
            </Flex>
        </Provider>
    )
}