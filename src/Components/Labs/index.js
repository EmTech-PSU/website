import React from 'react';
import {
    LabHeading,
    LabSelection,
    LabSelectionCard
}
    from './LabElements';

const Labs = () => {
    return (
        <div>
            <LabHeading />
            <LabSelection>
                <LabSelectionCard
                    labName="NGINX Lab"
                    src="https://clouddocs.f5.com/training/community/nginx/html/_images/module1.png"
                    alt="nginx logo"
                    anchorLink="#"
                    labDesc="NGINX Lab for learning about web servers and basic linux commands"
                />
                <LabSelectionCard
                    labName="Docker Lab"
                    src="https://i0.wp.com/www.docker.com/blog/wp-content/uploads/2013/11/homepage-docker-logo.png?resize=300%2C248&ssl=1"
                    alt="docker logo"
                    anchorLink="#"
                    labDesc="Docker is a container solution for building applications"
                />
                <LabSelectionCard
                    labName="Linux/Git Lab"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/150px-Tux.svg.png"
                    alt="linux logo"
                    anchorLink="#"
                    labDesc="Docker is a container solution for building applications"
                />
            </LabSelection>
        </div>
    )
}

export default Labs;