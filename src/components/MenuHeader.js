import React from 'react';
import {Menu} from 'semantic-ui-react'



class MenuHeader extends React.Component {

    state = {};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render = () => {
        return (
            <div>
                <Menu>
                    <Menu.Item
                        name='browse'
                        onClick={this.handleItemClick}>
                        Магазин книг
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='signup'
                            onClick={this.handleItemClick}>
                            Итого: &nbsp;<b>0</b>&nbsp;руб.
                        </Menu.Item>
                        <Menu.Item
                            name='help'
                            onClick={this.handleItemClick}>
                            Корзина (<b>0</b>)
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default MenuHeader
