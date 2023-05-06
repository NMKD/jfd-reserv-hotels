import React from "react";
import UserAdmin from "../User/UserAdmin";
import Container from "../Common/Container";
import withCurrentUser from "../../HOC/withCurrentUser";

const ComponentUserAdmin = withCurrentUser(UserAdmin);

const UserLayout = () => {
    return (
        <Container>
            <ComponentUserAdmin />
        </Container>
    );
};

export default UserLayout;
