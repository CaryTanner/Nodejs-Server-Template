import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div id="content">
        <section class="white">
          <div class="container">
            <div class="row">
              <div class="four columns photo">
                <img
                  src="images/profile.jpg"
                  class="u-max-full-width"
                  alt="Calvin - Smiling photo"
                />
              </div>

              <div class="eight columns">
                <article id="whoami">
                  <h4>Hello there, I'm Calvin!</h4>
                  <p>
                    I'm a self-motivated undergraduate senior, majoring in
                    Software Engineering, at San Jose State University (class of
                    Dec. 2020). I've experienced in both web & mobile (Android,
                    iOS) platforms, focusing on full-stack web development. I'm
                    seeking a Summer 2020 Internship and have a strong passion
                    for exploreing new technologies. Currently, I'm getting
                    involved into the AI field with PyTorch/Tensorflow to
                    quickly work on challenge projects that depends on the team
                    and projects need.
                  </p>
                  <p>
                    If you'd like to get in touch, please contact me via my
                    email at
                    <a href="mailto:calvin.nvqc@gmail.com">
                      calvin.nvqc@gmail.com
                    </a>
                    or (408) 318-2800.
                  </p>
                </article>
              </div>
            </div>

            <div class="row">
              <article>
                <h5>More about my work.</h5>
                <br />
                <div class="personal-items" id="personal_items">
                  <div class="row">
                    <div class="one column item-icon">
                      <i class="fa fa-file-text-o fa-2x"></i>
                    </div>
                    <div class="eleven columns item-text">
                      <a href="#">
                        AI Stealth-mode Startup // Full-stack Web Developer
                      </a>
                      <p>
                        Working with an AI stealth-mode startup since the start
                        to improve my full-stack web development skills and
                        teach myself React.js with TensorFlow/Pytorch.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="one column item-icon">
                      <i class="fa fa-paypal fa-2x"></i>
                    </div>
                    <div class="eleven columns item-text">
                      <a href="https://www.paypal.com/us/home">
                        PayPal Inc. (Summer 2019) // Mobile Engineering Intern
                      </a>
                      <p>
                        I've interned at PayPal Inc. twice &mdash; with the
                        PayPal Here Team in San Jose, CA. In Summer 2019, my
                        team was working on integrating mPOS devices to PayPal
                        Here Mobile app, and is seeking a solution to
                        communicate with the mPOS terminals through Android and
                        iOS. I took a chance to become a pioneer of the team to
                        quickly learn and develop an Android (Java) & iOS
                        (Swift) written to interface with payment terminals over
                        WiFi, Bluetooth, and USB. Later, the project was
                        successfully integrated into the existing PayPal Here
                        app.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="one column item-icon">
                      <i class="fa fa-paypal fa-2x"></i>
                    </div>
                    <div class="eleven columns item-text">
                      <a href="https://www.paypal.com/us/home">
                        PayPal Inc. (Summer 2018) // Web Engineering Intern
                      </a>
                      <p>
                        In Summer 2018, I worked closely with the Director,
                        People Engagement Lead of HQ, and a team of a senior
                        engineer (my mentor) and a Dev-ops Engineer to build an
                        event management app on campus to improve the engagement
                        of PayPal employees with different events. The app is
                        the first app that allows PayPal employees to test
                        PayPal first crypto currency. During the internship, me
                        and 3 other interns won a PayPal Favorite Award of an
                        <a href="https://www.facebook.com/paypalcareers/photos/a.10150816078171629/10155593131731629/?type=3&theater">
                          Emoji Hackathon
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="one column item-icon">
                      <i class="fa fa-university fa-2x"></i>
                    </div>
                    <div class="eleven columns item-text">
                      <a href="https://cs61bl.org/su16/">
                        UC Berkeley // Lab Assistant
                      </a>
                      <p>
                        I've worked at UC Berkeley as a lab assistant for CS 61B
                        - a Data Structure course - where I had a chance to help
                        other fellow students with Data Structure lab, homework,
                        projects. It has helped me not only to enhance my Data
                        Structure skills but also to observe the problems from
                        many different students' perspective to solve the
                        solution.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div class="row">
              <article>
                <h5>Connect & learn more about me // calvin.nvqc</h5>
                <br />
                <div class="personal-items" id="personal_items">
                  <div class="row">
                    <div class="one column item-icon">
                      <i class="fa fa-github fa-2x"></i>
                    </div>
                    <div class="eleven columns item-text">
                      <a href="https://github.com/calvinqc">GitHub</a>
                      <p>
                        Most of projects are private repos, and I like to work
                        with stealth-mode startup. Beside that, I pushed
                        anything from school and personal projects on here.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="one column item-icon">
                      <i class="fa fa-linkedin-square fa-2x"></i>
                    </div>
                    <div class="eleven columns item-text">
                      <a href="https://www.linkedin.com/in/calvinqc/">
                        LinkedIn
                      </a>
                      <p>
                        My professional profile. A place where I receive and
                        communicate with all my co-workers.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="one column item-icon">
                      <i class="fa fa-facebook-square fa-2x"></i>
                    </div>
                    <div class="eleven columns item-text">
                      <a href="https://www.facebook.com/calvin.nvqc">
                        Facebook
                      </a>
                      <p>
                        I share things about the world, fun videos, stories, and
                        news around the world.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="one column item-icon">
                      <i class="fa fa-instagram fa-2x"></i>
                    </div>
                    <div class="eleven columns item-text">
                      <a href="https://www.instagram.com/calvin.qc/">
                        Instagram
                      </a>
                      <p>
                        I post pictures about my personal life including myself,
                        my habits, and people around me.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="bye" class="gray">
          <div class="container">
            <div class="row">
              <h4>Presented by QC!</h4>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Landing;
