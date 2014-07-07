
<script src="http://knockoutjs.com/downloads/knockout-3.1.0.js"></script>
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
    this.middleName = ko.observable("Wiggles");
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());