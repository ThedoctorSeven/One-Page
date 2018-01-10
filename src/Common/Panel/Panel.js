import React, { Component } from "react";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import renderHTML from "react-render-html";

class Panel extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{renderHTML(text)}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default Panel;
