import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

const app = document.querySelector('main')
render(
    <App name='Pertronic Panel Order Wizard' store={PanelOrder} />, app
    );

console.log('welcome to Pertronic Panel Wizard')
