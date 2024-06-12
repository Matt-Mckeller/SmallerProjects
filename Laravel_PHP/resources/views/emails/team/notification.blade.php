<div>Customer: {{ $customer }}</div>
<div>Email: {{ $customer->emailAddresses()->first() }}</div>
<div>Phone: {{ $customer->phoneNumbers()->first() }}</div>