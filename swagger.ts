
import swaggerJSDoc from 'swagger-jsdoc'

const options:swaggerJSDoc.Options = {
    definition:{
        openapi:'3.0.0',
        info:{
            title:'title',
            version:'1.0.0'
        },
        components:{
            schemas:{
                auth:{
                    type:'object',
                    properties:{
                        password:{
                            required:true,
                            type:'string',
                        }, 
                        email:{
                            required:true,
                            type:'string',
                            example:'teste@teste.com'
                        },
                        username:{
                            required:true,
                            type:'string',
                        }, 
                    }
                },
                authRes:{
                    type:'object',
                    properties:{
                         id: {
                            type:'string'
                         }, 
                         fullName:{
                            type:'string'
                         }, 
                         email: {
                            type:'string'
                         }, 
                         username: {
                            type:'string'
                         }, 
                         image: {
                            type:'string'
                         },  
                         token: {
                            type:'string'
                         }, 
                    }
                },
                createUser:{
                    type:'object',
                    properties:{
                        fullName:{
                            required:true,
                            type:'string'
                        },
                        email:{
                            required:true,
                            type:'string'
                        },
                        username:{
                            required:true,
                            type:'string'
                        },
                        password:{
                            required:true,
                            type:'string'
                        },
                        file:{
                            required:true,
                            type:'string',
                            format:'base64'
                        }
                    }
                },
                createUserRes:{
                    type:'object',
                    properties:{
                        id:{
                            type:'string'
                        },
                        fullName:{
                            type:'string'
                        },
                        email:{
                            type:'string'
                        },
                        username:{
                            type:'string'
                        },
                        image:{
                            type:'string',
                        },
                        createdAt:{
                            type:'string',
                            format:'date'
                        },
                        updatedAt:{
                            type:'string',
                            format:'date'
                        }
                    }
                },
                updateTask:{
                    type: 'object',
                    properties:{
                        title:{
                            required: true,
                            type: 'string'
                        },
                        description:{
                            required: true,
                            type: 'string'
                        }
                    }
                },
                createTask:{
                    type: 'object',
                    properties:{
                        title:{
                            required: true,
                            type: 'string'
                        },
                        description:{
                            required: true,
                            type:'string'
                        }
                    }
                }
            },
            securitySchemes:{
                token:{
                    type:'http',
                    scheme:'Bearer',
                    bearerFormat:'JWT'
                }
            },
        },
        security:{
            token:[]
        }
    },
    apis:['./src/router.ts']
};

export const swaggerConfig = swaggerJSDoc(options); 