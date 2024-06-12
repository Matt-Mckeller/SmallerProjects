<span class="header-wrapper">
    <nav class="left" style="height: 100%; min-width: 20%;">
        <div style="width:100%; height: 100%; position: relative">
            <md-button id="menuButton" @click="toggleLeftSidenav">
            <md-icon id="menuIcon" @click="toggleLeftSidenav">menu</md-icon>
            </md-button>
        </div>
    </nav>

    <nav class="center">
        <img src="/imgs/ExpanseLogoAndTitleRight.svg" alt="Expanse Services Logo Jefferson City MO">
    </nav>
    <nav class="right">
        <a href="#" id="show-modal" @click="showContactUsModal = true" class="button alt">Contact Us</a>
    </nav>
</span>