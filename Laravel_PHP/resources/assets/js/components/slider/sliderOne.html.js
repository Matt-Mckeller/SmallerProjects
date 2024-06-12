module.exports =`
    <slider
        animation="fade"
        width="100%"
        height="100%" >
        <slider-item v-for="(i, index) in list" :key="index">
            <div class="paragraph-container">
                <h1>{{i.header}}</h1>
                <p>{{i.paragraph}}</p>
            </div>
        </slider-item>
    </slider>
`;
