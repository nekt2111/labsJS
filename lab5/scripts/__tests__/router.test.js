/* eslint-env jest */

import Router from '../router.js';
import {changeStatus, getStatusShown} from '../utility.js';
import 'regenerator-runtime/runtime.js';

describe('Router Module', ()=>{
    const router = new Router();
    it('It should route to pizzas page',async ()=>{
        window.location.href = '#pizzas';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('pizzas');
        expect(catalogName).toEqual('pizzas');
        expect(id).toEqual(undefined);
    }),
    it('It should route to home page',async ()=>{
        window.location.href = '#';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('index');
        expect(catalogName).toEqual('db');
        expect(id).toEqual(undefined);
    }),
    it('It should route to home page',async ()=>{
        window.location.href = '#321312wadasdsa';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('index');
        expect(catalogName).toEqual('db');
        expect(id).toEqual(undefined);
    }),
    it('It should route to sales page',async ()=>{
        window.location.href = '#sales';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('sales');
        expect(catalogName).toEqual('sales');
        expect(id).toEqual(undefined);
    }),
    it('It should route to drinks page',async ()=>{
        window.location.href = '#drinks';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('drinks');
        expect(catalogName).toEqual('drinks');
        expect(id).toEqual(undefined);
    }),
    it('It should route to sides page',async ()=>{
        window.location.href = '#sides';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('sides');
        expect(catalogName).toEqual('sides');
        expect(id).toEqual(undefined);
    }),
    it('It should route to deserts page',async ()=>{
        window.location.href = '#deserts';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('deserts');
        expect(catalogName).toEqual('deserts');
        expect(id).toEqual(undefined);
    }),
    it('It should route to error page',async ()=>{
        window.location.href = '#error';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('error');
        expect(catalogName).toEqual('db');
        expect(id).toEqual(undefined);
    }),
    it('It should route to cart to home page,because cart is null',async ()=>{
        localStorage.clear();
        window.location.href = '#cart';
        await router.getCurrentState();
        expect(window.location.href).toEqual('http://localhost/');
    }),
    it('It should route to cart page if it is not null',async ()=>{
        localStorage.setItem('cart',JSON.stringify({ids:['pizzas.1'],amount:[1]}));
        window.location.href = '#cart';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('cart');
        expect(catalogName).toEqual('db');
        expect(id).toEqual(undefined);
    }),
    it('It should route to product page if id exists',async ()=>{
        window.location.href = '#drinks/1';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('product');
        expect(catalogName).toEqual('drinks');
        expect(id).toEqual('1');
    }),
    it('It should route to home page if id doesn`t exist',async ()=>{
        window.location.href = '#drinks/10';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('index');
        expect(catalogName).toEqual('db');
        expect(id).toEqual(undefined);
    }),
    it('It should route to status page if status flag is false',async ()=>{

        changeStatus(false);
        window.location.href = '#status/9';
        let {fileName, catalogName} = await router.getCurrentState();
        expect(fileName).toEqual('status');
        expect(catalogName).toEqual('db');
        expect(getStatusShown()).toEqual(true);
    }),
    it('It should route to home page if status flag is true',async ()=>{

        changeStatus(true);
        window.location.href = '#status/9';
        let {fileName, catalogName} = await router.getCurrentState();
        expect(fileName).toEqual('index');
        expect(catalogName).toEqual('db');
        expect(getStatusShown()).toEqual(true);
    }),
    it('It should route to product page if id exists',async ()=>{
        window.location.href = '#pizzas/1';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('product');
        expect(catalogName).toEqual('pizzas');
        expect(id).toEqual('1');
    }),
    it('It should route to product page if id exists',async ()=>{
        window.location.href = '#deserts/1';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('product');
        expect(catalogName).toEqual('deserts');
        expect(id).toEqual('1');
    }),
    it('It should route to product page if id exists',async ()=>{
        window.location.href = '#sides/1';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('product');
        expect(catalogName).toEqual('sides');
        expect(id).toEqual('1');
    }),
    it('It should route to sale page if id exists',async ()=>{
        window.location.href = '#sales/1';
        let {fileName, catalogName, id} = await router.getCurrentState();
        expect(fileName).toEqual('sale');
        expect(catalogName).toEqual('sales');
        expect(id).toEqual('1');
    });




});