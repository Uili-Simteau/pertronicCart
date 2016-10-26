import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import PanelOrder from './modules/panelStore.js'

const app = document.querySelector('main')
render(
    <App name='Pertronic Panel Order Wizard' store={store} />, app
    );

console.log('welcome to Pertronic Panel Wizard')
