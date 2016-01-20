System.register([], function(exports_1) {
    var Doctor;
    return {
        setters:[],
        execute: function() {
            Doctor = (function () {
                function Doctor(id, first_name, last_name, email, phone, department) {
                    this.id = id;
                    this.first_name = first_name;
                    this.last_name = last_name;
                    this.email = email;
                    this.phone = phone;
                    this.department = department;
                    this.id = id && id || null;
                    this.first_name = first_name && first_name || '';
                    this.last_name = last_name && last_name || '';
                    this.email = email && email || '';
                    this.phone = phone && phone || '';
                    this.department = department && department || '';
                }
                return Doctor;
            })();
            exports_1("Doctor", Doctor);
        }
    }
});
