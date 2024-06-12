module.exports =`
<div class="modal-mask">
    <div class="modal-wrapper">
        <div class="modal-container">

            <div class="modal-header">
            <h3>We are excited to have you as part of the team!</h3>

            </div>

            <div class="modal-body">
                <div>
        <div id="contact-options-container" class="form-wrapper">
            <form id="contact-us-form" method="post" action="/api/contactUs/">
            <slot name="CSRF"></slot>
                <div class="form-body">
                    <div class="input-label-container">
                        <label class="form-label" for="contact-name">Contact Name</label>
                        <div class="input-container">
                            <input type="text" required id="contact-name" name="contactName" pattern="[a-zA-Z ,.'-]+" tabindex="1"/>
                        </div>
                    </div>
                    <div class="input-label-container">
                        <label class="form-label" for="contact-role">Your Role</label>
                        <div class="input-container">
                            <input type="text" required id="contact-role" name="contactRole" pattern="[a-zA-Z ,.'-]+" tabindex="2"/>
                        </div>
                    </div>
                    <div class="input-label-container">
                        <label class="form-label" for="contact-email">Email</label>
                        <div class="input-container">
                            <input type="email" required id="contact-email" name="email" pattern="\.+" tabindex="3"/>
                        </div>
                    </div>
                    <div class="input-label-container">
                        <label class="form-label" for="contact-phone">Phone</label>
                        <div class="input-container">
                            <input type="tel" required id="contact-phone" name="phone" tabindex="4"/>
                        </div>
                    </div>
                    <div class="wide-input-label-container">
                        <label class="form-label" for="contact-website">Website Url</label>
                        <div class="input-container">
                            <input type="text" id="contact-website" name="contactWebsite" pattern="\.*" tabindex="5"/>
                        </div>
                    </div>
                    <div class="input-label-container">
                        <label class="form-label" for="project-start-date">Starting Timeline?</label>
                        <div class="input-container">
                            <select id="project-start-date" name="startTimeframe" tabindex="6">
                                <option value=""></option>
                                <option value="2 to 4 weeks">Rushed: 2-4 weeks (Rush fee may apply)</option>
                                <option value="4 to 6 weeks">Soon: 4-6 weeks</option>
                                <option value="6 to 8 weeks">Standard: 6-8 weeks</option>
                                <option value="2 months">Future: 2+ months</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-label-container">
                        <label class="form-label" for="contact-budget">Project budget?</label>
                        <div class="input-container">
                            <select id="contact-budget" name="estimatedBudget" tabindex="7">
                                <option value=""></option>
                                <option value="$2000 to $4500">$2,000 – $4,500</option>
                                <option value="$4500 to $8000">$4,500 – $8,000</option>
                                <option value="$8000 to $15000">$8,000 – $15,000</option>
                                <option value="$15000 to $25000">$15,000 - $25,000</option>
                                <option value="$25000 to $50000">$25,000 - $50,000</option>
                                <option value="$50000 plus">$50,000 +</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-footer">
                    <input type="submit" id="contact-us-submit" class="form-submit-button" tabindex="8">
                </div>
            </form>
        </div>
    </div>
</h3>
            </div>
        </div>
    </div>
</div>
`;


//module.exports =`
//<div class="modal-mask">
//    <div class="modal-wrapper">
//        <div class="modal-container">
//
//            <div class="modal-header">
//                <slot name="header">
//                    default header
//                </slot>
//            </div>
//
//            <div class="modal-body">
//                <slot name="body">
//                    default body
//                </slot>
//            </div>
//
//            <div class="modal-footer">
//                <slot name="footer">
//                    default footer
//                </slot>
//            </div>
//        </div>
//    </div>
//</div>
//`;
//
