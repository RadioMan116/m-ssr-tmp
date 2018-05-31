import React from 'react';
import { array } from 'prop-types';
import uniqBy from 'lodash/uniqBy';
// import { number } from 'prop-types';
import cls from 'classnames';

import { connect } from 'react-redux';
// import i18n from 'meteor/universe:i18n';

import { callGetMenu, callFindAccount } from '../../../api/redux/async-actions';
// const T = i18n.createComponent();

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            address: '',
            delivery: 'pickup',
            pay: 'checkout'
        };
    }

    handlePhone = event => {
        this.setState({ phone: event.target.value });
    };

    handleDelivery = event => {
        this.setState({ delivery: event.target.value });
    };

    handlePay = event => {
        this.setState({ pay: event.target.value });
    };

    handleOrder = event => {
        console.log('state', this.state);
    };

    handleAddress = event => {
        this.setState({ address: event.target.value });
    };

    checkoutLabelText = () => {
        if (this.state.delivery === 'courier') return 'Курьеру';

        return 'На кассе';
    };
    render() {
        return (
            <form className="order-form">
                <fieldset>
                    <legend>Номер телефона</legend>
                    <label htmlFor="phone">Введите номер телефона в удобнов формате</label>
                    <br />
                    <input
                        value={this.state.phone}
                        onChange={this.handlePhone}
                        id="phone"
                        type="tel"
                        placeholder="89178992303"
                        size="20"
                        minLength="9"
                        maxLength="11"
                    />
                </fieldset>
                <fieldset>
                    <legend>Доставка</legend>
                    <div className="order-form__radio">
                        <div className="order-form__box">
                            <input
                                onChange={this.handleDelivery}
                                checked={this.state.delivery === 'pickup'}
                                value="pickup"
                                id="pickup"
                                type="radio"
                                name="delivery"
                                tabIndex="0"
                            />
                        </div>
                        <label htmlFor="pickup" className="order-form__label">
                            <span className="order-form__title">Заберу сам</span>
                            <div className="order-form__hint">г.Иннополис спортивная 100-77</div>
                        </label>
                    </div>
                    <div className="order-form__radio">
                        <div className="order-form__box">
                            <input
                                onChange={this.handleDelivery}
                                checked={this.state.delivery === 'courier'}
                                value="courier"
                                id="courier"
                                type="radio"
                                name="delivery"
                                tabIndex="0"
                            />
                        </div>
                        <label htmlFor="courier" className="order-form__label">
                            <span className="form__title">Курьером</span>
                            <div className="order-form__hint">Описан способ доставки курьером</div>
                        </label>
                    </div>

                    {this.state.delivery === 'courier' && (
                        <div className="order-form__address">
                            <label htmlFor="address" className="order-form__label">
                                Адрес доставки
                            </label>

                            <input
                                onChange={this.handleAddress}
                                value={this.state.address}
                                id="address"
                                name="address"
                            />
                        </div>
                    )}

                    <div className="order-form__radio">
                        <div className="order-form__box">
                            <input
                                onChange={this.handleDelivery}
                                checked={this.state.delivery === 'book-it'}
                                value="book-it"
                                id="book-it"
                                type="radio"
                                name="delivery"
                                tabIndex="0"
                            />
                        </div>
                        <label htmlFor="book-it" className="order-form__label">
                            <span className="order-form__title">Забронировать столик</span>
                            <div className="order-form__hint">Перезвоним на ваш номер, уточним все детали</div>
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Оплата</legend>
                    <div className="order-form__radio">
                        <div className="order-form__box">
                            <input
                                onChange={this.handlePay}
                                checked={this.state.pay === 'checkout'}
                                value="checkout"
                                id="checkout"
                                type="radio"
                                name="pay"
                                tabIndex="0"
                            />
                        </div>
                        <label htmlFor="checkout" className="order-form__label">
                            <span className="order-form__title">{this.checkoutLabelText()}</span>
                            <div className="order-form__hint">Наличными / картой / перевод сбербанк</div>
                        </label>
                    </div>

                    <div className="order-form__radio">
                        <div className="order-form__box">
                            <input
                                onChange={this.handlePay}
                                checked={this.state.pay === 'online'}
                                value="online"
                                id="online"
                                type="radio"
                                name="pay"
                                tabIndex="0"
                            />
                        </div>
                        <label htmlFor="online" className="order-form__label">
                            <span className="order-form__title">Онлайн оплата</span>
                            <div className="order-form__hint">Яндекс касса</div>
                        </label>
                    </div>
                </fieldset>

                <div>
                    <button type="button" onClick={this.handleOrder}>
                        Заказать
                    </button>
                    <button type="button">Отменить</button>
                </div>
            </form>
        );
    }
}

OrderForm.propTypes = {
    orders: array.isRequired
};

const mapStateToProps = state => ({ orders: state.orders });

export default connect(mapStateToProps, { fetch: callGetMenu, findAccount: callFindAccount })(OrderForm);