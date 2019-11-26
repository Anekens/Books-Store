import React from 'react'
import {Menu} from 'semantic-ui-react'


const Filter = ({setFilter, filterBy}) => {
    return (
        <Menu secondary>
            <Menu.Item
                name='all'
                active={filterBy === 'all'}
                onClick={setFilter.bind(this,'all')}>
                Все
            </Menu.Item>
            <Menu.Item
                name='popular'
                active={filterBy === 'popular'}
                onClick={setFilter.bind(this,'popular')}>
                Популярные
            </Menu.Item>
            <Menu.Item
                name='priceHigh'
                active={filterBy === 'priceHigh'}
                onClick={setFilter.bind(this,'priceHigh')}>
                Цена (дорогие)
            </Menu.Item>
            <Menu.Item
                name='priceLow'
                active={filterBy === 'priceLow'}
                onClick={setFilter.bind(this,'priceLow')}>
                Цена (дешевые)
            </Menu.Item>
            <Menu.Item
                name='author'
                active={filterBy === 'author'}
                onClick={setFilter.bind(this,'author')}>
                Автор
            </Menu.Item>
        </Menu>
    )
};

export default Filter