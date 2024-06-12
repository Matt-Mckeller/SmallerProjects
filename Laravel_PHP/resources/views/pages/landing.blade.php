@extends('layouts/scrollifyLayout')

@section('title')
    Website Design & Development - Jefferson City, MO
@endsection

@section('page-links')
    {{--Vue Materials--}}
    <link rel="stylesheet" href="/css/main.css">
@endsection

@section('banner')
    <section id="banner">
        <div id="banner-background-div">
            <img src="/imgs/stairs_white_real.jpg">
        </div>
        <div id="banner-forward-div">
            <h2>{{config('site.banner.h1')}}</h2>
            <p>{{config('site.banner.p')}}</p>
        </div>
    </section>
@endsection

@section('sectionone')
    <section id="one" class="wrapper">
        <div class="inner flex flex-3">
            <div class="flex-item left">
                <div>
                    <h1>Website Design and UX</h1>
                    <p>Lead visitors through your new cutting edge website. Help them to become better informed leading to higher conversion rates.</p>
                </div>
                <div>
                    <h1>Long Term Value</h1>
                    <p>We value long-term business relationships. We're guessing you do too.</p>
                </div>
            </div>
            <div class="flex-item image fit round">
                <img src="/imgs/pexels-photo-110078.jpeg" alt="growth and marketing circle" class="zoom-scale-hover">
            </div>
            <div class="flex-item right">
                <div>
                    <h1>Strategic Marketing for Growth</h1>
                    <p>Digital strategy, design, engineering and marketing for high-growth organizations. Get ready to start climbing the search engine ladder and get amass new leads.</p>
                </div>
                <div>
                    <h1>Graphic Design</h1>
                    <p>We bring to the table not just brilliant developers, but visionary designers.</p>
                </div>
                {{--Your website will be easy to use, easy to update, and a fundamental component of your growth.--}}
            </div>
        </div>
    </section>
@endsection

@section('sectiontwo')
    <section id="main_paragraph_container">
        <div class="paragraph-container">
            <h1>Responsive web design company<br/><span>Jefferson City and Columbia</span></h1>
            <p>From Ecommerece to custom applications, we offer a suite of services that can be tailored to meet the specific requirements of almost any business. We are a Jefferson City web design firm that aims to offer a flexible, accessible service, prioritizing good communication as well as excellent results, delivered on time and within an agreed budget.</p>
        </div>
    </section>
@endsection


@section('sectionthree')
    <div id="slider_section">
        <div id="slider_container">
            <slider-one></slider-one>
        </div>
    </div>
@endsection

@section('sectionfour')
    <div class="full-container centered-container regular-scroll header-padding-top">
        <img id="infographic-1" src="/imgs/infographic-smaller.jpg" alt="Web Design leads to more customers">
    </div>
@endsection

@section('sectionfive')
    <div class="full-container centered-container header-padding-top">
        <img id="infographic-2" src="/imgs/infographic-2-smaller.jpg" alt="What do customers look for in web design?">
    </div>
@endsection
