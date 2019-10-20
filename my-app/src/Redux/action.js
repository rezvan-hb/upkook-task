
export const get_Detail_Info = ( detail_ID , title , creation_date , short_description , description ) => ({
    type: 'Get_Detail_Info',
    detail_ID : detail_ID,
    title : title ,
    creation_date : creation_date,
    short_description: short_description,
    description:description
})

