import React from 'react'
import { Save, Download, Settings } from 'lucide-react'
import Button from '../UI/Button'
import IconButton from '../UI/IconButton'
import useFunnelStore from '../../store/funnelStore'
import '../../styles/topbar.css'

const TopBar = ({ onSettingsClick }) => {
  const { funnelMetadata } = useFunnelStore()

  const handleSave = () => {
    console.log('Saving funnel...')
    // TODO: Implement save functionality
  }

  const handleExport = () => {
    console.log('Exporting funnel...')
    // TODO: Implement export functionality
  }

  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">{funnelMetadata.name}</h1>
        <span className={`topbar-status topbar-status--${funnelMetadata.status}`}>
          {funnelMetadata.status}
        </span>
      </div>
      <div className="topbar-right">
        <Button variant="secondary" size="sm" onClick={handleSave}>
          <Save size={16} /> Save
        </Button>
        <Button variant="secondary" size="sm" onClick={handleExport}>
          <Download size={16} /> Export
        </Button>
        <IconButton
          icon={Settings}
          variant="ghost"
          onClick={onSettingsClick}
          tooltip="Funnel Settings"
        />
      </div>
    </div>
  )
}

export default TopBar
