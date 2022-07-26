import * as React from 'react';
import "../Menu/menu.css";
import Cart from "../Cart/cart";
import Grid from '@mui/material/Grid';

function SpecialMenu() {
    return (
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
                                        <img src={require('../../Images/special2.jpg')} alt="Appetizer" />
                                    </picture>
                                    <div class="coursemeal-info">
                                        Special Appetizer
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <p class="title">Seekh Kebabs</p>
                            <p>Mutton seekh kebabs are a Ramzan favourite. Minced and spiced mutton is set up on iron skewers and roasted on a grill. These are relished along with mint chutney and onion rings.  Although mutton seekh kebabs are the popular ones many people even prepare seekh kebabs with chicken meat.</p>
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
                                        <img src={require('../../Images/special3.jpg')} alt="Main Course" />
                                    </picture>
                                    <div class="coursemeal-info">
                                        Special Main Course
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <p class="title">Cauliflower Stuffed</p>
                            <p>This versatile veg is delicious any way you cook it, and its mellow flavor acts like a canvas for aromatics and spices, and it works well with salty elements like anchovies, olives and capers, as well as rich, smoky bacon and speck. Cauliflower also plays nicely with cream, butter, eggs, and nuts, too.</p>
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
                                        <img src={require('../../Images/special1.jpg')} alt="Appetizer" />
                                    </picture>
                                    <div class="coursemeal-info">
                                        Pizza
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <p class="title">Pepperoni Pizza</p>
                            <p>pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.</p>
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
                                        <img src={require('../../Images/special4.jpg')} alt="Dessert" />
                                    </picture>
                                    <div class="coursemeal-info">
                                        Special Dessert
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <p class="title">Vegan Gluten-Free Strawberry Shortcake</p>
                            <p>The shortcakes are adapted from my Best Damn Vegan Biscuits – a reader favorite. I made a few modifications, including a thicker vegan “buttermilk” of coconut milk instead of almond milk. And I made them gluten-free with a mix of my gluten-free flour blend, almond flour, and cornstarch.The result is a seriously fluffy, tender shortcake that’s perfect for strawberries and coconut whipped cream.</p>
                            <Cart />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br />  <br />
        </Grid>
    )
}

export default SpecialMenu;