import React from 'react';
import { Col } from 'react-bootstrap';
import { IconType } from 'react-icons';

interface ISkillProps {
  Icon: IconType;
  name: string;
}

const Skill: React.FC<ISkillProps> = ({ Icon, name }) => {
  return (
    <Col xs={4} md={3}>
      <div className="d-block mt-3">
        <div className="d-flex justify-content-center">
          <Icon size={100} color="#fff" className=" skill p-2 rounded-circle" />
        </div>
        <div className="d-flex justify-content-center">
          <p className="h3 mt-1 text-white">{name}</p>
        </div>
      </div>
    </Col>
  );
};

export default Skill;
