export class Doctor{
  constructor(
    public id?: number,
    public first_name?: string,
    public last_name?: string,
    public email?: string,
    public phone?: string,
    public department?: string
  ){
    this.id = id && id || null;
    this.first_name = first_name && first_name || '';
    this.last_name = last_name && last_name || '';
    this.email = email && email || '';
    this.phone = phone && phone || '';
    this.department = department && department || '';
  }
}
