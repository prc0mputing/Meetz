import React, { PropTypes as T } from 'react'
import { Breadcrumb, IBreadcrumbItem } from 'office-ui-fabric-react/lib/Breadcrumb'
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar'
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu'
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import {
    Selection,
    SelectionMode,
    SelectionZone,
} from 'office-ui-fabric-react/lib/utilities/selection'
import { Check } from 'office-ui-fabric-react/lib/Check'
import './content.component.css'

class Content extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [
                { name: 'Jimmy Fallen', title: 'Showman' },
                { name: 'Woody Allen', title: 'Actor' },
                { name: 'Jennifer Lawrence', title: 'Actress' }
            ],
            selection: new Selection({ onSelectionChanged: this._onSelectionChanged }),
            selectionMode: SelectionMode.single,
            canSelect: 'all',
        }
        this.state.selection.setItems(this.state.items, false)
    }

    componentDidMount() {
        this._hasMounted = true
    }

    _onSelectionChanged = () => {
        if (this._hasMounted) this.forceUpdate()
    }

    render() {
        const { breadcrumbs, maxBreadcrumbs, menuItems, farMenuItems } = this.props
        const { items, selection, selectionMode } = this.state
        return (
            <div className="container">
                <Breadcrumb className="breadcrumbs" items={breadcrumbs}
                    maxDisplayedItems={maxBreadcrumbs}
                />
                <CommandBar isSearchBoxVisible={true}
                    searchPlaceholderText="Search..."
                    items={menuItems}
                    farItems={farMenuItems}
                />
                <div className="selection">
                    <MarqueeSelection selection={selection} isEnabled={selectionMode === SelectionMode.multiple}>
                        <SelectionZone selection={selection}
                            selectionMode={selectionMode}
                            onItemInvoked={item => alert(item)}>
                            {items.map((item, index) => (
                                <div key={index} className="selection-item" data-selection-index={index}>
                                    {(selectionMode !== SelectionMode.none) && (
                                        <span className="check" data-selection-toggle={true}>
                                            <Check checked={selection.isIndexSelected(index)} />
                                        </span>
                                    )}
                                    <span className="name">{item.name}</span>
                                </div>
                            ))}
                        </SelectionZone>
                    </MarqueeSelection>
                </div>
            </div>
        )
    }
}

// Content.propTypes = {
//     items: T.arrayOf(T.shape(IBreadcrumbItem)),
//     menuItems: T.arrayOf(T.shape(IContextualMenuItem)),
//     farMenuItems: T.arrayOf(T.shape(IContextualMenuItem)),
//     maxBreadcrumbs: T.number,
// }

Content.defaultProps = {
    maxBreadcrumbs: 3,
    breadcrumbs: [
        { text: 'Files', 'key': 'Files', onClick: (e) => { } },
        { text: 'This is folder 1', 'key': 'f1', onClick: (e) => { } },
        { text: 'This is folder 2', 'key': 'f2', onClick: (e) => { } },
        { text: 'This is folder 3', 'key': 'f3', onClick: (e) => { } },
        { text: 'This is folder 4', 'key': 'f4', onClick: (e) => { } },
        { text: 'Home', 'key': 'f5', onClick: (e) => { } },
    ],
    menuItems: [
        {
            key: 'newItem',
            name: 'New',
            cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
            iconProps: {
                iconName: 'Add'
            },
            ariaLabel: 'New. Use left and right arrow keys to navigate',
            subMenuProps: {
                items: [
                    {
                        key: 'emailMessage',
                        name: 'Email message',
                        iconProps: {
                            iconName: 'Mail'
                        },
                        ['data-automation-id']: 'newEmailButton'
                    },
                    {
                        key: 'calendarEvent',
                        name: 'Calendar event',
                        iconProps: {
                            iconName: 'Calendar'
                        }
                    }
                ]
            }
        },
        {
            key: 'upload',
            name: 'Upload',
            iconProps: {
                iconName: 'Upload'
            },
            href: 'https://dev.office.com/fabric',
            ['data-automation-id']: 'uploadButton'
        },
        {
            key: 'share',
            name: 'Share',
            iconProps: {
                iconName: 'Share'
            },
            onClick: () => console.log('Share')
        },
        {
            key: 'download',
            name: 'Download',
            iconProps: {
                iconName: 'Download'
            },
            onClick: () => console.log('Download')
        }
    ],
    farMenuItems: [
        {
            key: 'sort',
            name: 'Sort',
            iconProps: {
                iconName: 'SortLines'
            },
            onClick: () => console.log('Sort')
        },
        {
            key: 'tile',
            name: 'Grid view',
            iconProps: {
                iconName: 'Tiles'
            },
            iconOnly: true,
            onClick: () => console.log('Tiles')
        },
        {
            key: 'info',
            name: 'Info',
            iconProps: {
                iconName: 'Info'
            },
            iconOnly: true,
            onClick: () => console.log('Info')
        }
    ]
}

export default Content