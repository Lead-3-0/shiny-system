import React from 'react'
import { X } from 'lucide-react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import Toggle from '../UI/Toggle'
import useFunnelStore from '../../store/funnelStore'
import '../styles/funnel-settings.css'

const FunnelSettings = ({ onClose }) => {
  const { funnelMetadata, setFunnelMetadata } = useFunnelStore()
  const [formData, setFormData] = React.useState(funnelMetadata)

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    setFunnelMetadata(formData)
    onClose()
  }

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-panel" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2>Funnel Settings</h2>
          <button className="settings-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="settings-content">
          <Input
            label="Funnel Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Enter funnel name"
          />
          <Input
            label="Description"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Enter funnel description"
            as="textarea"
          />
          <div className="settings-field">
            <label>Status</label>
            <select
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
              className="settings-select"
            >
              <option value="draft">Draft</option>
              <option value="active">Active</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div className="settings-field">
            <Toggle
              label="Enable Analytics"
              checked={formData.analyticsEnabled !== false}
              onChange={(e) =>
                handleChange('analyticsEnabled', e.target.checked)
              }
            />
          </div>
        </div>
        <div className="settings-footer">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FunnelSettings
