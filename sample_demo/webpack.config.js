module.exports = {
    devtool : 'eval-source-map',
    entry : __dirname + '/app/main.js',
    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    },
    //热更新
    devServer : {
        contentBase : './public',//本地服务器所加载页面所在的目录
        historyApiFallback : true,//不跳转
        inline : true //实时刷新
    },
    //Babel配置
    module : {
        rules : [
            {
                test : /(\.jsx|\.js)$/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : ["env","react"]
                    }
                },
                exclude : /node_modules/ //屏蔽不需要处理的文件夹 include是必须处理的
            },{
                test : /\.css$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : "css-loader",
                        options : {
                            modules : true,
                            localIdentName : '[name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    }
}