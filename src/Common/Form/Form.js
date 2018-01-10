import React, { Component } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  withStyles,
  Icon
} from "material-ui";
import { DatePicker } from "material-ui-pickers";
import moment, { min, max } from "moment";
import PropTypes from "prop-types";
import simpleJoi from "joi";
const Joi = simpleJoi.extend(require("joi-phone-number"));

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 16,
    marginBottom: 8,
    width: 200
  },
  menu: {
    width: 200
  }
});

const schema = Joi.object().keys({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  firstname: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  mail: Joi.string().email(),
  phoneNumber: Joi.string()
    .phoneNumber()
    .required(),
  msg: Joi.string()
    .alphanum()
    .min(5)
    .max(500)
    .required()
  // birthday: Joi.number()
  //   .integer()
  //   .min(1900)
  //   .max(2000)
  //   .required()
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        firstname: "",
        mail: "",
        phoneNumber: "",
        msg: "",
        birthday: "",
      },
      error: []
    };
  }

  handleChange = name => event => {
    const {form} = this.state
    this.setState({
      form: {...form, [name]: event.target.value}
    });
  };

  handleDateChange = (birthday) => {
    const {form} = this.state
    this.setState({ form: {...form, birthday: birthday }});
  };

  onSubmit = () => {
    console.log(this.state.form);
    // console.log(schema);
    const result = Joi.validate(this.state.form, schema);
    // const result = Joi.validate();
    console.log(result);
  };

  render() {
    const { classes } = this.props;
    const { form } = this.state;

    return (
      <Card>
        <CardHeader
          title="Formulaire de contact"
          subheader="Tous les champs doivent être valide pour envoyer un message"
        />
        <CardContent>
          <form onSubmit={this.onSubmit} className={classes.container}>
            <DatePicker
              keyboard
              clearable
              type="date"
              className={classes.textField}
              value={form.birthday}
              onChange={this.handleDateChange}
              animateYearScrolling={false}
            />
            <TextField
              required
              id="name"
              label="Nom"
              className={classes.textField}
              value={form.name}
              onChange={this.handleChange("name")}
              margin="normal"
            />
            <TextField
              required
              id="firstname"
              label="Prénom"
              className={classes.textField}
              value={form.firstname}
              onChange={this.handleChange("firstname")}
              margin="normal"
            />
            <TextField
              required
              type="email"
              id="mail"
              label="E-mail"
              value={form.mail}
              onChange={this.handleChange("mail")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              type="tel"
              id="phoneNumber"
              label="Numéro de téléphone"
              value={form.phoneNumber}
              onChange={this.handleChange("phoneNumber")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              id="msg"
              label="Message"
              value={form.msg}
              onChange={this.handleChange("msg")}
              className={classes.textField}
              margin="normal"
            />
          </form>
        </CardContent>
        <CardActions>
          <Button raised color="primary">
            Envoyer
          </Button>
        </CardActions>
      </Card>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
