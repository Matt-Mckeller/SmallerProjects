<!-- use the modal component, pass in the prop -->
<contact-us-modal v-if="showContactUsModal" @close="showContactUsModal = false">

<div slot="CSRF">
    {{csrf_field()}}
</div>
</contact-us-modal>
{{--<div>--}}
    {{--<h3 class="modal-header">Which method of contact would you prefer?</h3>--}}
    {{--<div id="contact-options-container">--}}
        {{--<button class="flex-item contact-option-button" @click="$emit('close')">--}}
        {{--<i class="fa fa-phone" aria-hidden="true"></i> (573) 291-8667--}}
        {{--</button>--}}
        {{--<button class="flex-item contact-option-button" @click="$emit('close')">--}}
        {{--Fill out Form--}}
        {{--</button>--}}
        {{--<button class="flex-item contact-option-button" @click="$emit('close')">--}}
        {{--Google Login--}}
        {{--</button>--}}
        {{--<button class="flex-item contact-option-button" @click="$emit('close')">--}}
        {{--FB Login--}}
        {{--</button>--}}
    {{--</div>--}}
{{--</div>--}}