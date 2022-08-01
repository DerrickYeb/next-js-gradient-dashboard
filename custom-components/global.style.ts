export const styles = {
    global: ({props}:any) => ({
        ...props.theme.global,
        '.sidebar-item': {
            '&:hover': {
                backgroundColor: '#f5f5f5',
                cursor: 'pointer',
            }
        },
        '.sidebar-item.active': {
            backgroundColor: '#f5f5',
            color: '#fff',
            cursor: 'pointer',
        }
    })
}