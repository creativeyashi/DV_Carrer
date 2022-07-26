import * as React from 'react';
import "./menu.css";
import Grid from '@mui/material/Grid';
import Cart from "../Cart/cart";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Routes, Route } from "react-router-dom";


function Menu() {
    return (
        <div>
        <Grid spacing = {2}>
            <br />  <br />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}></Grid>
                <Grid item xs={10}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={6}>
                            <div class="menu coursemeal">
                                <div class="coursemeal__div ">
                                    <picture class="responsive-img">
                                        <img src={require('../../Images/menu1.jpg')} alt="Appetizer" />
                                    </picture>
                                    <div class="coursemeal-info">
                                        Appetizer
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <p class="title">Shredded Brussels Sprout Ricotta Toast</p>
                            <p>A bright tangle of shredded Brussels sprouts, raisins, and pine nuts tops silky ricotta in this snappy, satisfying toast. Serve it as a meatless starter at your next party.</p>
                            <Cart />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br />  <br />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}></Grid>
                <Grid item xs={10}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={6}>
                            <div class="menu coursemeal">
                                <div class="coursemeal__div ">
                                    <picture class="responsive-img">
                                        <img src={require('../../Images/menu2.jpg')} alt="Main Course" />
                                    </picture>
                                    <div class="coursemeal-info">
                                        Main Course
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <p class="title">Chicken Tikka Masala</p>
                            <p>Chicken tikka masala made easy with this great-tasting recipe — simply marinate chicken breast in yogurt and spices and then simmer in a tomato cream sauce. Serve with rice or warm pita bread.</p>
                            <Cart />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br />  <br />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}></Grid>
                <Grid item xs={10}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={6}>
                            <div class="menu coursemeal">
                                <div class="coursemeal__div ">
                                    <picture class="responsive-img">
                                        <img src={require('../../Images/menu4.jpg')} alt="Appetizer" />
                                    </picture>
                                    <div class="coursemeal-info">
                                        Biryani
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <p class="title">Pot Chicken Biryani</p>
                            <p>Biryani is a rice dish with vegetables, chicken, or fish marinated in yogurt and warm spices such as turmeric, red chili powder, and garam masala. It is traditionally slow-cooked by layering the marinated meat or vegetables over the rice and is topped with caramelized onions, aromatic saffron, and fresh cilantro or mint.</p>
                            <Cart />
                       </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br />  <br />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}></Grid>
                <Grid item xs={10}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={6}>
                            <div class="menu coursemeal">
                                <div class="coursemeal__div ">
                                    <picture class="responsive-img">
                                        <img src={require('../../Images/menu3.jpg')} alt="Dessert" />
                                    </picture>
                                    <div class="coursemeal-info">
                                        Dessert
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <p class="title">Chocolate Dessert Ice-Cream</p>
                            <p>Chocolate dessert ice cream recipes. One dessert that is loved and enjoyed by both kids and adults is ice-cream.Especially when it comes to kids , it is chocolate ice-cream !A scoop of ice-cream served in a cup or a scoop topped on a waffle cone or a loaded Sundae is sure to steal your heart with its enticing mouth-feel.</p>
                            <Cart />
                       </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br />  <br />
        </Grid>
        </div>
    )
}



export default Menu;