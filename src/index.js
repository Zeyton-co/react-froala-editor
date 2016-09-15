import React from 'react'

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsLoaded: false
    }

    this.base = props.base || '';
    this.baseJS = this.base + '/js/plugins/';
    this.baseCSS = this.base + '/css/plugins/';
    this.baseId = props.baseId || 'froala-editor';
    this.loadJquery = props.loadJquery != undefined ? props.loadJquery : true;
    this.loadFA = props.loadFA != undefined ? props.loadFA : true;
    
  }
  
  scriptAlreadyLoaded(id) {
    
      var element = document.getElementById("froala-editor-js-" + id);
      if(element) {
        return true;
      } 
      
      return false;
    
  }

  loadJS(url, id, cb) {
    id = this.baseId + '-js-' + id;

    if (document.getElementById(id)) return false;

    var script = document.createElement('script');
    script.id = id;
    script.src = url;
    script.addEventListener('load', cb, false);

    document.getElementsByTagName('head')[0].appendChild(script);
  }

  loadCSS(url, id) {
    id = this.baseId + '-css-' + id;

    if (document.getElementById(id)) return false;

    let stylesheet, node;
    stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = url;
    stylesheet.media = "all";
    stylesheet.id = id;
    node = document.lastChild;
    while (node.nodeType !== 1) { node = node.previousSibling; }
    node = node.firstChild;
    while (node.nodeType !== 1) { node = node.nextSibling; }
    node.appendChild(stylesheet);
  }
  
  loadFroalaCSS() {
    if (this.loadFA) {
      this.loadCSS('//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css', 'fa');
    }

    this.loadCSS(this.base + '/css/froala_editor.min.css', 'feditor');
    this.loadCSS(this.base + '/css/froala_style.min.css', 'fstyle');
  }

  loadFroalaJS() {
    
    if(this.scriptAlreadyLoaded(['feditor'])) {
      
      this.loadPlugins();
          this.setState({jsLoaded: true}, () => {
            
            $(() => {
              $('#edit').froalaEditor(this.props.config || {});
              this.setState({visible: true});
            });
          });
      
    } else {
      
      
      if (this.loadJquery) {
      this.loadJS('//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js', 'a', () => {
        this.loadJS(this.base + '/js/froala_editor.min.js', 'feditor', () => {
          this.loadPlugins();
          this.setState({jsLoaded: true}, () => {
            
            $(() => {
              $('#edit').froalaEditor(this.props.config || {});
              this.setState({visible: true});
            });
          });
        });
      });
    } else {
      
       this.loadJS(this.base + '/js/froala_editor.min.js', 'feditor', () => {
          this.loadPlugins();
          this.setState({jsLoaded: true}, () => {
            
            $(() => {
              $('#edit').froalaEditor(this.props.config || {});
              this.setState({visible: true});
            });
          });
        });
      
    }
      
      
    }
    
    
  }

  loadPlugins() {
    
    if (this.props.imageP || this.props.imageManagerP) {
      this.loadJS(this.baseJS + 'image.min.js', 'fimage', () => {
        if (this.props.imageManagerP) {
          this.loadJS(this.baseJS + 'image_manager.min.js', 'fimageM');
          this.loadCSS(this.baseCSS + 'image_manager.css', 'fimageM');
        }
      });
      this.loadCSS(this.baseCSS + 'image.css', 'fimage');
    }
    
    if (this.props.alignP) {
      this.loadJS(this.baseJS + 'align.min.js', 'falign');
    }

    if (this.props.charCounterP) {
      this.loadJS(this.baseJS + 'char_counter.min.js', 'fcharC');
      this.loadCSS(this.baseCSS + 'char_counter.css', 'fcharC');
    }

    if (this.props.codeViewP) {
      this.loadJS(this.baseJS + 'code_view.min.js', 'fcodeV');
      this.loadCSS(this.baseCSS + 'code_view.css', 'fcodeV');
    }

    if (this.props.codeBeautifierP) {
      this.loadJS(this.baseJS + 'code_beautifier.min.js', 'fcodeB');
    }

    if (this.props.colorsP) {
      this.loadJS(this.baseJS + 'colors.min.js', 'fcolors');
      this.loadCSS(this.baseCSS + 'colors.css', 'fcolors');
    }

    if (this.props.draggableP) {
      this.loadJS(this.baseJS + 'draggable.min.js', 'fdraggable');
      this.loadCSS(this.baseCSS + 'draggable.css', 'fdraggable');
    }

    if (this.props.emoticonsP) {
      this.loadJS(this.baseJS + 'emoticons.min.js', 'femoticons');
      this.loadCSS(this.baseCSS + 'emoticons.css', 'femoticons');
    }

    if (this.props.entitiesP) {
      this.loadJS(this.baseJS + 'entities.min.js', 'fentities');
    }

    if (this.props.fileP) {
      this.loadJS(this.baseJS + 'file.min.js', 'ffile');
      this.loadCSS(this.baseCSS + 'file.css', 'ffile');
    }

    if (this.props.fontFamilyP) {
      this.loadJS(this.baseJS + 'font_family.min.js', 'ffontFamily');
    }

    if (this.props.fontSizeP) {
      this.loadJS(this.baseJS + 'font_size.min.js', 'ffontSize');
    }

    if (this.props.fullscreenP) {
      this.loadJS(this.baseJS + 'fullscreen.min.js', 'ffullscreen');
      this.loadCSS(this.baseCSS + 'fullscreen.css', 'ffullscreen');
    }

    if (this.props.inlineStyleP) {
      this.loadJS(this.baseJS + 'inline_style.min.js', 'finlineS');
    }

    if (this.props.lineBreakerP) {
      this.loadJS(this.baseJS + 'line_breaker.min.js', 'flineB');
      this.loadCSS(this.baseCSS + 'line_breaker.css', 'flineB');
    }

    if (this.props.linkP) {
      this.loadJS(this.baseJS + 'link.min.js', 'flink');
    }

    if (this.props.listsP) {
      this.loadJS(this.baseJS + 'lists.min.js', 'flists');
    }

    if (this.props.paragraphFormatP) {
      this.loadJS(this.baseJS + 'paragraph_format.min.js', 'fparagraphF');
    }

    if (this.props.paragraphStyleP) {
      this.loadJS(this.baseJS + 'paragraph_style.min.js', 'fparagraphS');
    }

    if (this.props.quickInsertP) {
      this.loadJS(this.baseJS + 'quick_insert.min.js', 'fquickI');
      this.loadCSS(this.baseCSS + 'quick_insert.css', 'fquickI');
    }

    if (this.props.quoteP) {
      this.loadJS(this.baseJS + 'quote.min.js', 'fquote');
    }

    if (this.props.saveP) {
      this.loadJS(this.baseJS + 'save.min.js', 'fsave');
    }

    if (this.props.tableP) {
      this.loadJS(this.baseJS + 'table.min.js', 'ftable');
      this.loadCSS(this.baseCSS + 'table.css', 'ftable');
    }

    if (this.props.urlP) {
      this.loadJS(this.baseJS + 'url.min.js', 'furl');
    }

    if (this.props.videoP) {
      this.loadJS(this.baseJS + 'video.min.js', 'fvideo');
      this.loadCSS(this.baseCSS + 'video.css', 'fvideo');
    }
  }
  // <script type="text/javascript" src="f/js/plugins/image.min.js"></script>
  // <script type="text/javascript" src="f/js/plugins/image_manager.min.js"></script>

  componentDidMount() {
    this.loadFroalaCSS();
    this.loadFroalaJS();
  }

  getHtml() {
    return $('#edit').froalaEditor('html.get');
  }

  render() {
    var style = {display: 'none'};
    if (this.state.visible === true) {
      style = {};
    } 
    return this.state.jsLoaded ? <div id="edit" className="fr-view" style={style} dangerouslySetInnerHTML={{__html: this.props.value || ''}}></div> : null;
  }
}
