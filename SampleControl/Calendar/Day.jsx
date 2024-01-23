import React, { Component } from 'react';
import { card, CardHeader,CardPreview, Badge  } from '@fluentui/react-components';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';


const propTypes = {
  classes: PropTypes.string,
  dayClicked: PropTypes.func.isRequired,
  dayHovered: PropTypes.func.isRequired,
  day: momentObj,
  title: PropTypes.string
};

const defaultProps = {
  classes: '',
  day: null,
  title: undefined
};

class Day extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onHover = this.onHover.bind(this);
  }

  onClick() {
    const { dayClicked, day } = this.props;
    dayClicked(day);
  }

  onHover() {
    const { dayHovered, day } = this.props;
    dayHovered(day);
  }

  render() {
    const { classes, day, title } = this.props;

    const cardHeaderStyles = {
        display :'block !important',
       color:'red'
      
    };

    return (
      <td onClick={this.onClick} onMouseEnter={this.onHover} className={classes} title={title}>
        <card>
          <CardHeader style={cardHeaderStyles} header={ day === null ? '' : <Badge shape="rounded" color="informative"> {day.date()}</Badge>}></CardHeader>
          <CardPreview>Event 1</CardPreview>
        </card>

      </td>
    );
  }
}

Day.propTypes = propTypes;
Day.defaultProps = defaultProps;

export default Day;
