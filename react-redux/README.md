# React Redux

## When we should use Redux
When there are two pages or screen will used same value or data.
It's better to use redux rather than pass the data from navigation.
But make sure the data is not a credential (like user_id, email, password, etc).

## When we should not use Redux
When there are two or more components consist of parent and child component.
It's better no to use redux. Use props instead.